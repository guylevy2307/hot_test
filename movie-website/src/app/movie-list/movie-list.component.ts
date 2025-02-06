import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { MovieItemComponent } from '../movie-Item/movie-Item.component';
import { MovieItem } from '../../Models/MovieItem';
import { MovieService } from '../services/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone:true,
  imports: [MovieItemComponent,NgFor,FormsModule ]
})
export class MovieListComponent implements OnInit {
  moviesList$!: Observable<MovieItem[]>;
  filteredMovies: MovieItem[] = [];
  searchQuery: string = '';
  sortOption: string = 'title';
  constructor(private movieService:MovieService) { }

  ngOnInit() {

    this.movieService.tokenSubject.asObservable().subscribe(token => {
      if (token) {
        this.movieService.getAllMovies().subscribe(movies => {
          this.filteredMovies = movies;
        });
      } else {
        console.error('No token available');
      }
    });

  }
  onSearch(): void {
    let searchResults = this.filteredMovies;

    if (this.searchQuery.trim()) {
      searchResults = searchResults.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

    }
    else {
      this.moviesList$.subscribe((movies) => {
        this.filteredMovies = movies;
      });
    }

    this.sortMovies(searchResults);
  }
  onSort(): void {
    this.sortMovies(this.filteredMovies);
  }
  sortMovies(movies: MovieItem[]): void {
    if (this.sortOption === 'title') {
      this.filteredMovies = movies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (this.sortOption === 'year') {
      this.filteredMovies = movies.sort((a, b) =>
        parseInt(a.year) - parseInt(b.year)
      );
    }
  }
}
