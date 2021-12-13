const express = require('express');

const { register, login } = require('./controller/user.controller');

const app = express();

app.use(express.json());

app.post('/login', login);
app.post('/register', register);




module.exports = app;