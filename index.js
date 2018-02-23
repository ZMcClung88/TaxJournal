const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  cors = require('cors'),
  parseurl = require('parseurl'),
  session = require('express-session'),
  config = require('./backend/config');

var connString = 'postgres://postgres:@localhost/TaxDiary';
// const app = module.exports = express();
var app = (module.exports = express());

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.use(
  session({
    cookieName: 'session',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
    // cookie: { maxAge:600000 }
  })
);

// app.use(function (req, res, next) {
//   if (!req.session.views) {
//     req.session.views = {}
//   }
//
//   // get the url pathname
//   var pathname = parseurl(req).pathname
//
//   // count the views
//   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
//
//   next()
// })

// app.use(function (req, res, next) {
//   console.log("looking for storage", req.session);
// })

app.get('/home', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/home'] + ' times');
});

app.get('/demo', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/demo'] + ' times');
});

// app.use(session({
//   cookieName: "session",
//   secret: config.sessionSecret,
//   resave: false,
//   saveUninitialized: true,
//   duration: 30 * 60 * 1000,
//   activeDuration: 5 * 60 * 1000
//   // cookie: { maxAge:600000 }
// }));

var db = massive.connect({ connectionString: connString }, function(err, localdb) {
  db = localdb;
  app.set('db', db);
});
// app.set('db', massiveInstance);
// var db = app.get('db');
// const massiveInstance = massive.connectSync({connectionString: config.database_secret});

const port = 8080; //80

// app.set('db', massiveInstance);
const mainControl = require('./backend/mainControl');
const registerControl = require('./backend/registerControl');
const usersControl = require('./backend/usersControl');

//// ENTRIES ////
app.get('/api/entries', mainControl.getEntries);
app.post('/api/demo', mainControl.addEntry);
app.get('/api/singleDemo/:id', mainControl.getSingleDemo);
app.get('/api/singleEntry/:id', usersControl.getSingleEntry);
app.post('/api/account/addEntry', usersControl.userAddEntry);
app.delete('/api/deleteEntry/:id', usersControl.deleteEntry);
app.delete('/api/deleteDemoEntries', mainControl.deleteDemoEntries);
// app.get('/api/product/:id', productsControl.getSingleProduct);

//// USERS ////
app.get('/api/users', mainControl.getUsers);
app.post('/api/register', registerControl.register);
app.post('/api/login', usersControl.login);
app.get('/loggedUser', usersControl.checkLoginStatus);
app.get('/logout', function(req, res) {
  req.session.destroy();
});
app.post('/api/account', usersControl.getUserEntries);

//// TEST ////
app.get('/test', function(req, res) {
  res.status(200).json('test working');
});

app.listen(port, () => {
  console.log(`Ship docked on port ${port}`);
});
