import { Injectable } from '@angular/core';
import { MovieItem } from '../../Models/MovieItem';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMovieService {

  private favoriteMovies: MovieItem[] = [];

  constructor() {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    if (storedFavorites) {
      this.favoriteMovies = JSON.parse(storedFavorites);
    }
  }

  getFavorites(): MovieItem[] {
    return this.favoriteMovies;
  }

  toggleFavorite(movie: MovieItem): void {

    const index = this.favoriteMovies.findIndex((fav) => fav.imdbID === movie.imdbID);
    if (index === -1) {
      this.favoriteMovies.push(movie);
    } else {
      this.favoriteMovies.splice(index, 1);
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

  isFavorite(movie: MovieItem): boolean {
    return this.favoriteMovies.some((fav) => fav.imdbID === movie.imdbID);
  }
}
