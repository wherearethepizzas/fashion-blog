const express = require('express');
const Datastore = require('nedb');
const { request, response } = require('express');
const app = express();
const database = new Datastore('kim.db');
database.loadDatabase();


app.listen(5000, () => console.log('Connected at http://localhost:5000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}))
app.post('/api', (request, response) => {
    console.log('We\'re running bih!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});