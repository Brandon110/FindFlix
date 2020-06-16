import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  DiscoverMovie,
  MoviePopular,
  MovieNowPlaying,
  MovieTopRated,
  MovieUpcoming,
  MovieVideo,
  MovieInfo,
  MovieSearch
} from '@app/shared/models/movies';
import { TvPopular, TvTopRated, TvOnTheAir, TvAiringToday, TvInfo, TvVideos, TvSearch } from '@app/shared/models/tv';

@Injectable({
  providedIn: 'root'
})
export class MdbApiService {
  private baseUrl = '/mdb/api/';
  private endpoints = {
    movie: {
      discover: this.baseUrl + 'discover/movie',
      nowPlaying: this.baseUrl + 'movie/now-playing',
      popular: this.baseUrl + 'movie/popular',
      topRated: this.baseUrl + 'movie/top-rated',
      upcoming: this.baseUrl + 'movie/upcoming',
      info: this.baseUrl + 'movie/info',
      videos: this.baseUrl + 'movie/videos'
    },
    tv: {
      info: this.baseUrl + 'tv/info',
      popular: this.baseUrl + 'tv/popular',
      topRated: this.baseUrl + 'tv/top-rated',
      onTheAir: this.baseUrl + 'tv/on-the-air',
      airingToday: this.baseUrl + 'tv/airing-today',
      videos: this.baseUrl + 'tv/videos'
    },
    search: {
      tv: this.baseUrl + 'search/tv',
      movie: this.baseUrl + 'search/movie'
    }
  };

  constructor(private httpClient: HttpClient) {}

  // Movies

  public discoverMovie(): Observable<DiscoverMovie> {
    return this.httpClient.get<DiscoverMovie>(this.endpoints.movie.discover);
  }

  public moviePopular(page?): Observable<MoviePopular> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<MoviePopular>(this.endpoints.movie.popular, {
      params: params
    });
  }

  public movieNowPlaying(page?): Observable<MovieNowPlaying> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<MovieNowPlaying>(this.endpoints.movie.nowPlaying, {
      params: params
    });
  }

  public movieTopRated(page?): Observable<MovieTopRated> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<MovieTopRated>(this.endpoints.movie.topRated, {
      params: params
    });
  }

  public movieUpcoming(page?): Observable<MovieUpcoming> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<MovieUpcoming>(this.endpoints.movie.upcoming, {
      params: params
    });
  }

  public movieVideos(movieId): Observable<MovieVideo> {
    const params = new HttpParams().set('id', movieId);

    return this.httpClient.get<MovieVideo>(this.endpoints.movie.videos, {
      params: params
    });
  }

  public movieInfo(movieId): Observable<MovieInfo> {
    const params = new HttpParams().set('id', movieId);

    return this.httpClient.get<MovieInfo>(this.endpoints.movie.info, {
      params: params
    });
  }

  // Tv

  public tvPopular(page?): Observable<TvPopular> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<TvPopular>(this.endpoints.tv.popular, {
      params: params
    });
  }

  public tvTopRated(page?): Observable<TvTopRated> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<TvTopRated>(this.endpoints.tv.topRated, {
      params: params
    });
  }

  public tvOnTheAir(page?): Observable<TvOnTheAir> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<TvOnTheAir>(this.endpoints.tv.onTheAir, {
      params: params
    });
  }

  public tvAiringToday(page?): Observable<TvAiringToday> {
    const params = new HttpParams().set('page', page || 1);

    return this.httpClient.get<TvAiringToday>(this.endpoints.tv.airingToday, {
      params: params
    });
  }

  public tvInfo(showId): Observable<TvInfo> {
    const params = new HttpParams().set('id', showId);

    return this.httpClient.get<TvInfo>(this.endpoints.tv.info, {
      params: params
    });
  }

  public tvVideos(showId): Observable<TvVideos> {
    const params = new HttpParams().set('id', showId);

    return this.httpClient.get<TvVideos>(this.endpoints.tv.videos, {
      params: params
    });
  }

  // Search

  public searchTv(query): Observable<TvSearch> {
    const params = new HttpParams().set('query', query);

    return this.httpClient.get<TvSearch>(this.endpoints.search.tv, {
      params: params
    });
  }

  public searchMovie(query): Observable<MovieSearch> {
    const params = new HttpParams().set('query', query);

    return this.httpClient.get<MovieSearch>(this.endpoints.search.movie, {
      params: params
    });
  }
}
