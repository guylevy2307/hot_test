import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieItem } from '../../Models/MovieItem';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from '@ngbmodule/material-carousel';  // For the carousel
import { FavoriteMovieService } from '../services/FavoriteMovie.service';
@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input() movie!: MovieItem;
  currentImageIndex: number = 0;

  constructor(private favoriteService: FavoriteMovieService) {}

  toggleFavorite() {
    this.favoriteService.toggleFavorite(this.movie);
  }
  isFavorite(): boolean {
    return this.favoriteService.isFavorite(this.movie);
  }
  get currentImage(): string {
    return this.movie.images[this.currentImageIndex];
  }

  nextImage() {
    if (this.currentImageIndex < this.movie.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0; // Loop back to the first image
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.movie.images.length - 1; // Loop to the last image
    }
  }
}
