const express = require('express');

const { register, login } = require('./controller/user.controller');

const movieController = require('./controller/movie.controller');


const app = express();

app.use(express.json());

app.post('/login', login);
app.post('/register', register);

app.use('',movieController)



module.exports = app;