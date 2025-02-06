import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieItem } from '../../Models/MovieItem';
import { environment } from '../environment';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  serverUrl = environment.apiUrl;
  public tokenSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) {
    this.fetchToken();
  }

  private fetchToken(): void {
    this.http.get<any>(`${this.serverUrl}/token`).subscribe({
      next: response => {
        this.tokenSubject.next(response.token);
      },
      error: err => {
        console.error('Failed to fetch token:', err);
      }
    });
  }

  getAllMovies(): Observable<MovieItem[]> {
    return this.tokenSubject.asObservable().pipe(
      switchMap(token => {
        if (!token) {
          throw new Error('No token available');
        }

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };

        return this.http.get<MovieItem[]>(`${this.serverUrl}/movies`, httpOptions).pipe(
          catchError(err => {
            console.error('Error fetching movies:', err);
            throw err;
          })
        );
      })
    );
  }
}
