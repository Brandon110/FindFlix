import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { DiscoverMovie } from '@app/shared/models/movies';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-discover',
  templateUrl: './movie-discover.component.html',
  styleUrls: ['./movie-discover.component.scss']
})
export class MovieDiscoverComponent implements OnInit, OnDestroy {
  private notificationOptions = {
    persistOnNavigation: false
  };
  private intervalSubscription: Subscription;

  discoverMovie: DiscoverMovie;
  currentIndex = 0;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService, private router: Router) {}

  ngOnInit(): void {
    this.mdbApiService.discoverMovie().subscribe(
      (data: DiscoverMovie) => {
        this.discoverMovie = data;

        this.startAutoNext();
      },
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }

  ngOnDestroy(): void {
    this.stopAutoNext();
  }

  stopAutoNext(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  startAutoNext(): void {
    this.stopAutoNext();

    this.intervalSubscription = interval(5000).subscribe(() => {
      if (this.canToggleNext) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    });
  }

  toggleNext(): void {
    if (this.canToggleNext) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  togglePrev(): void {
    if (this.currentIndex >= 1) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.discoverMovie.results.length - 1;
    }
  }

  viewMovie(movieId: number): void {
    this.router.navigateByUrl(`/movie/${movieId}`);
  }

  get canToggleNext() {
    return this.currentIndex < this.discoverMovie.results.length - 1;
  }
}
