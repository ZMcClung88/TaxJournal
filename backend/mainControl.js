const app = require('.././index.js')
    , db = app.get('db');

  module.exports = {
    getEntries: (req, res) => {
      var db = app.get('db');
      db.getAllEntries((err, entries) => {
        if(!err) {
          return res.status(200).send(entries);
        } else {
          return err;
        }
      })
    },
    getUsers: (req, res) => {
      var db = app.get('db');
      db.getAllUsers((err, users) => {
        if(!err) {
          return res.status(200).send(users);
        } else {
          return err;
        }
      })
    }
  }
