import { Component, OnInit } from '@angular/core';
import { MovieItem } from '../../Models/MovieItem';
import { FavoriteMovieService } from '../services/FavoriteMovie.service';
import { MovieItemComponent } from '../movie-Item/movie-Item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-FavoriteMovies',
  templateUrl: './FavoriteMovies.component.html',
  styleUrls: ['./FavoriteMovies.component.css'],
  standalone: true,
  imports:[MovieItemComponent,NgFor]
})
export class FavoriteMoviesComponent implements OnInit {

  favoriteMovies: MovieItem[] = [];

  constructor(private favoriteMovieService: FavoriteMovieService) {}

  ngOnInit(): void {
    
    this.favoriteMovies = this.favoriteMovieService.getFavorites();
  }

}
