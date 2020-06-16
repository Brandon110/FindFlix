const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static(path.join('public', 'dist')));

require('./routes')(app);

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

app.use((error, req, res, next) => {
    res.status(500).json({ msg: 'Internal server error.' });
});

app.listen(app.get('port'), () => {
    console.log('Server running on port:' + app.get('port'));
});