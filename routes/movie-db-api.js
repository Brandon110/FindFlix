const MovieDBControllors = require('../controllors/movie-db-controllors');
const mdb = new MovieDBControllors();

module.exports = function (app) {

    // Request Token 
    app.get(mdb.base_url + 'authentication/token/new', mdb.requestTokenControllor);

    // Session Id
    app.post(mdb.base_url + 'authentication/session/new', mdb.sessionIdControllor);

    // Movie Info
    app.get(mdb.base_url + 'movie/info', mdb.movieInfoControllor);

    // Discover Movie
    app.get(mdb.base_url + 'discover/movie', mdb.discoverMovieControllor);

    // Search Movie
    app.get(mdb.base_url + 'search/movie', mdb.searchMovieControllor);

    // Movie Videos 
    app.get(mdb.base_url + 'movie/videos', mdb.movieVideosControllor);

    // Movie Popular
    app.get(mdb.base_url + 'movie/popular', mdb.moviePopularControllor)

    // Movie Now Playing
    app.get(mdb.base_url + 'movie/now-playing', mdb.movieNowPlayingControllor);

    // Movie Top Rated
    app.get(mdb.base_url + 'movie/top-rated', mdb.movieTopRatedControllor);

    // Movie Upcoming
    app.get(mdb.base_url + 'movie/upcoming', mdb.movieUpcomingControllor);

    // Tv Info
    app.get(mdb.base_url + 'tv/info', mdb.tvInfoControllor);

    // Tv Popular
    app.get(mdb.base_url + 'tv/popular', mdb.tvPopularControllor);
    
    // Tv Airing Today
    app.get(mdb.base_url + 'tv/airing-today', mdb.tvAiringTodayControllor);

    // Tv On The Air
    app.get(mdb.base_url + 'tv/on-the-air', mdb.tvOnTheAirControllor);

    // Tv Top Rated
    app.get(mdb.base_url + 'tv/top-rated', mdb.tvTopRatedControllor);

    // Tv Airing Today
    app.get(mdb.base_url + 'tv/airing-today', mdb.tvAiringTodayControllor);

    // Tv Videos
    app.get(mdb.base_url + 'tv/videos', mdb.tvVideosControllor);

    // Search Tv
    app.get(mdb.base_url + 'search/tv', mdb.searchTvControllor);

    // Account Info
    app.get(mdb.base_url + 'account/info', mdb.accountInfoControllor);
} 