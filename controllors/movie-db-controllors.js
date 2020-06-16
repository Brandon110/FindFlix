const MovieDatabaseApi = require('../libs/movie-db');
mdb = new MovieDatabaseApi(process.env.TMDB_API_KEY);

// Format args

function formatArgs() {
    let args = {};

    for (const i in arguments) {
        for (const j in arguments[i]) {
            args[j] = arguments[i][j];
        }
    }

    return args;
}

// Constructor
// Base url path for Movies Database API routes

function MovieDBControllors() {
    this.base_url = '/mdb/api/';

    return this;
}

// Authentication Controllors

MovieDBControllors.prototype.requestTokenControllor = function (req, res, next) {
    mdb.requestToken(function (err, results) {
        if (err) return next(err);

        if (results.success && results.request_token)
            res.redirect('https://www.themoviedb.org/authenticate/' + results.request_token + '?api_key=' + mdb.api_key);
        else
            res.status(401).json({ msg: 'Invalid or expired request token.' });
    });
}

MovieDBControllors.prototype.sessionIdControllor = function (req, res, next) {
    mdb.sessionId(function (err, results) {
        if (err) return next(err);

        if (results.success && results.session_id)
            res.status(200).json({ success: true });
        else
            res.status(404).json({ msg: 'Id is invalid.' });
    });
}

// Movie Controllors

MovieDBControllors.prototype.movieInfoControllor = function (req, res, next) {
    mdb.movieInfo(formatArgs(req.query, req.params), function (err, results) {
        if (err) return next(err);

        if (34 === results.status_code)
            res.status(401).json({ msg: 'Could not get the resource requested.' });
        else
            res.status(200).json(results);
    });
}

MovieDBControllors.prototype.movieVideosControllor = function (req, res, next) {
    mdb.movieVideos(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.moviePopularControllor = function (req, res, next) {
    mdb.moviePopular(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.movieNowPlayingControllor = function (req, res, next) {
    mdb.movieNowPlaying(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.movieTopRatedControllor = function (req, res, next) {
    mdb.movieTopRated(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.movieUpcomingControllor = function (req, res, next) {
    mdb.movieUpcoming(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

// Tv Controllors

MovieDBControllors.prototype.tvInfoControllor = function (req, res, next) {
    mdb.tvInfo(formatArgs(req.query, req.params), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvPopularControllor = function (req, res, next) {
    mdb.tvPopular(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvAiringTodayControllor = function (req, res, next) {
    mdb.tvAiringToday(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvOnTheAirControllor = function (req, res, next) {
    mdb.tvOnTheAir(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvTopRatedControllor = function (req, res, next) {
    mdb.tvTopRated(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvAiringTodayControllor = function (req, res, next) {
    mdb.tvAiringToday(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

MovieDBControllors.prototype.tvVideosControllor = function (req, res, next) {
    mdb.tvVideos(formatArgs(req.query, req.params), function (err, results) {
        if (err) return next(err);

        res.status(200).json(results);
    });
}

// Discover Controllors

MovieDBControllors.prototype.discoverMovieControllor = function (req, res, next) {
    mdb.discoverMovie(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        if (results.total_results < 1)
            res.status(404).json({ msg: 'No movies matching your query.' });
        else
            res.status(200).json(results);
    });
}

// Search Controllors

MovieDBControllors.prototype.searchMovieControllor = function (req, res, next) {
    mdb.searchMovie(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        if (results.total_results < 1) 
            res.status(404).json({ msg: 'No movies matching your query.' });
        else
            res.status(200).json(results);
    });
}

MovieDBControllors.prototype.searchTvControllor = function (req, res, next) {
    mdb.searchTv(formatArgs(req.query), function (err, results) {
        if (err) return next(err);

        if (results.total_results < 1) 
            res.status(404).json({ msg: 'No shows matching your query.' });
        else
            res.status(200).json(results);
    });
}

// Account Controllors

MovieDBControllors.prototype.accountInfoControllor = function (req, res, next) {
    mdb.accountInfo(function (err, results) {
        if (err) return next(err);

        if (!results.id)
            res.status(401).json({ msg: 'Authentication Failed, try again later.' });
        else
            res.status(200).json(results);
    });
}

module.exports = MovieDBControllors;