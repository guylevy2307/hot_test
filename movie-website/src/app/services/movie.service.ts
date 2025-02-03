import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

 constructor(private http:HttpClient) { }


 getAllCars(): Observable<MovieItem[]>{
  return this.http.get<MovieItem[]>('http://localhost:5049/api/Movies');
}
}
