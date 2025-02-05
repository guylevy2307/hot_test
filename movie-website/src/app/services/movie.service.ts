import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieItem } from '../../Models/MovieItem';

@Injectable({
  providedIn: 'root'
})
export class MovieService  {
  serverUrl = "https://localhost:5001/api/Movies";

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<MovieItem[]> {

    // const token = localStorage.getItem('Token');

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': token ? `Bearer ${token}` : '' // If token exists, add it to Authorization header
    //   })
    // };

    // Make the HTTP GET request with the Authorization header
    return this.http.get<MovieItem[]>(this.serverUrl);
  }
}
