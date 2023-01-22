require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/frontend'));

// Serve the registration page on the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/Registration.html');
});
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/style.css');
});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/frontend/logo.png');
});
app.get('/registration.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/registration.js');
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/frontend/favicon.ico');
});

//LOGIN page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/frontend/Login.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/style.css');
});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/frontend/logo.png');
});
app.get('/login.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/login.js');
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/frontend/favicon.ico');
});

// GROUPS page
app.get('/groups', (req, res) => {
  res.sendFile(__dirname + '/frontend/Groups.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/style.css');
});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/frontend/logo.png');
});


app.get('/groups.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/groups.js');
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/frontend/favicon.ico');
});


//BILLS page
app.get('/bills', (req, res) => {
  res.sendFile(__dirname + '/frontend/Bills.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/style.css');
});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/frontend/logo.png');
});
app.get('/bills.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/bills.js');
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/frontend/favicon.ico');
});

 //ACCOUNTS page
app.get('/accounts', (req, res) => {
  res.sendFile(__dirname + '/frontend/Accounts.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/style.css');
});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/frontend/logo.png');
});
app.get('/accounts.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/accounts.js');
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
});
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
