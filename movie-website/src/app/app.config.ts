import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';  // Import HttpClientModule
import { MovieService } from './services/movie.service'; // Import MovieService
import { FormsModule, NgModel } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    FormsModule,
    NgModel
  ]
};
