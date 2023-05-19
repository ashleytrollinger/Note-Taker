const express = require('express');
const api = require('/.routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/feedbac', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);
