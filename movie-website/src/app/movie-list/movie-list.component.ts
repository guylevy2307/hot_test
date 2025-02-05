import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { MovieItemComponent } from '../movie-Item/movie-Item.component';
import { MovieItem } from '../../Models/MovieItem';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone:true,
  imports: [AsyncPipe,MovieItemComponent,NgFor]
})
export class MovieListComponent implements OnInit {
  moviesList$!:Observable<MovieItem[]>
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.moviesList$ = this.movieService.getAllMovies();


  }

}
