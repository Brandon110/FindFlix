export class TvPopular {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvResults[];
}

export class TvTopRated {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvResults[];
}

export class TvOnTheAir {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvResults[];
}

export class TvAiringToday {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvResults[];
}

export class TvInfo {
  backdrop_path: string;
  created_by: TvCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: TvGenres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TvLastEpisodeToAir[];
  name: string;
  networks: TvNetworks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TvProductionCompanies[];
  seasons: TvSeasons[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export class TvVideos {
  id: number;
  results: TvVideosResults[];
}

export class TvSearch {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvResults[];
}

export class TvResults {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export class TvCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export class TvGenres {
  id: number;
  name: string;
}

export class TvLastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export class TvNetworks {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export class TvProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export class TvSeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export class TvVideosResults {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
