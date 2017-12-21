const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , config = require('./backend/config');

var connString = 'postgres://postgres:@localhost/TaxDiary';
// const app = module.exports = express();
var app = module.exports = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.use(cors());

// app.use(session({
//   cookieName: "session",
//   secret: config.sessionSecret,
//   resave: false,
//   saveUninitialized: true,
//   duration: 30 * 60 * 1000,
//   activeDuration: 5 * 60 * 1000
//   // cookie: { maxAge:600000 }
// }));

var db = massive.connect({connectionString : connString},
  function(err, localdb) {
    db = localdb;
    app.set('db', db);
  }
)
// app.set('db', massiveInstance);
// var db = app.get('db');
// const massiveInstance = massive.connectSync({connectionString: config.database_secret});






const port = 8080;    //80

// app.set('db', massiveInstance);
const mainControl = require('./backend/mainControl');
const registerControl = require('./backend/registerControl');
const usersControl = require('./backend/usersControl')

//// ENTRIES ////
app.get('/api/entries', mainControl.getEntries);

//// USERS ////
app.get('/api/users', mainControl.getUsers);
app.post('/api/register', registerControl.register);
app.post('/api/login', usersControl.login);


//// TEST ////
app.get('/test', function(req, res) {
  res.status(200).json('test working');
})

app.listen(port, () => {
  console.log(`Ship docked on port ${port}`);
});
