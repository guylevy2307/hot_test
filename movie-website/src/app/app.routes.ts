import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteMoviesComponent } from './FavoriteMovies/FavoriteMovies.component';

export const routes: Routes = [
  {
    path: '', component: MovieListComponent
  }, {
    path:'fav',component:FavoriteMoviesComponent
  }

];
