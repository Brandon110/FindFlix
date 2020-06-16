export class DiscoverMovie {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieResults[];
}

export class MovieNowPlaying {
  page: number;
  dates: Dates;
  total_pages: number;
  results: MovieResults[];
}

export class MovieUpcoming {
  page: number;
  dates: Dates;
  total_pages: number;
  results: MovieResults[];
}

export class MoviePopular {
  page: number;
  date: Dates;
  total_pages: number;
  total_results: number;
  results: MovieResults[];
}

export class MovieTopRated {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieResults[];
}

export class MovieResults {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export class MovieInfo {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genres;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: productionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguages;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class MovieVideo {
  id: number;
  results: MovieVideoResults[];
}

export class MovieSearch {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieResults[];
}

export class MovieVideoResults {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export class Dates {
  maximum: number;
  minimum: number;
}

export class productionCompanies {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export class ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export class Genres {
  id: number;
  name: string;
}

export class spokenLanguages {
  iso_639_1: string;
  name: string;
}
