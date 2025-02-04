import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  serverUrl="http://localhost:5049/api/Movies"

 constructor(private http:HttpClient) { }


 getAllCars(): Observable<MovieItem[]>{
  return this.http.get<MovieItem[]>(this.serverUrl);
}
}
