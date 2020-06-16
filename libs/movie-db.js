const request = require('superagent');
const endpoints = require('./endpoints.json');

// Constructor
// API credentials and base url.
// Option to pass in base url incase of API url or version changes

function MovieDB(apiKey, baseUrl) {
    this.api_key = apiKey;

    if (baseUrl)
        this.baseUrl = baseUrl
    else
        this.base_url = endpoints.baseUrl;
}

// Authentication methods

MovieDB.prototype.requestToken = function (cb) {
    let self = this;

    const m = endpoints.authentication.requestToken;

    request
        .get(this.base_url + m.endpoint)
        .query({ api_key: this.api_key })
        .set('accept', 'application/json')
        .end(function (err, res) {
            if (res.ok) {
                if (err) {
                    cb(err.response.body);
                }
                else {
                    if (res.body.success && res.body.request_token) {
                        self.request_token = res.body.request_token;
                        cb(null, res.body);
                    }
                    else {
                        cb();
                    }
                }
            }
            else {
                cb(res.body);
            }
        });
}

MovieDB.prototype.sessionId = function (cb) {
    let self = this;

    const m = endpoints.authentication.sessionId;

    request
        .post(this.base_url + m.endpoint)
        .query({ api_key: this.api_key })
        .send({ request_token: this.request_token })
        .set('accept', 'application/json')
        .end(function (err, res) {
            if (res.ok) {
                if (err) {
                    cb(err.response.body)
                }
                else {
                    self.session_id = res.body.session_id;
                    cb(null, res.body);
                }
            }
            else {
                cb(res.body);
            }
        });
}

// Create API methods with our endpoints.json object

Object.keys(endpoints.methods).forEach(function (t) {
    const ct = endpoints.methods[t];
    Object.keys(ct).forEach(function (m) {
        MovieDB.prototype[t + m] = function (params, cb) {

            if (typeof params === 'function') {
                cb = params;
                params = {};
            }
            // If params.page is not a number return 1
            params.page = parseInt(params.page, 10) || 1;
            // Execute our query
            executeQuery.call(this, ct[m].endpoint, ct[m].type, params, cb);
        }
    });
});

// Execute Query

function executeQuery(endpoint, type, params, cb) {
    // Replace parameter placeholders in endpoint url with params
    endpoint = endpoint.replace(':id', params.id)
   
    let req = request(type, this.base_url + endpoint)
        .query({ api_key: this.api_key, session_id: this.session_id })
        .set('accept', 'application/json');

    if (type === 'GET')
        req.query(params); // Add params to query if GET request
    else
        req.send(params); // Send params in post body if POST, PUT, or DELETE request

    req.end(function (err, res) {
        if (res.ok) {
            if (err)
                cb(err.response.body);
            else
                cb(null, res.body);
        }
        else {
            handleErrors(res, cb);
        }
    });
}

function handleErrors(res, cb) {
    switch (res.body.status_code) {
        case 34: // The resource requested could not be found.
        case 3: // You do not have permission to access this service.
        case 8: // Duplicate entry.
            cb(null, res.body);
            break;
        default:
            // Rest of status codes that would usually result in a internal server error.
            // Invalid API key etc...
            cb(res.body);
    }
}

module.exports = MovieDB;