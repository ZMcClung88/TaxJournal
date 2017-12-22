const app = require('.././index.js')
    , db = app.get('db');

  module.exports = {
    getEntries: (req, res) => {
      let db = app.get('db');
      db.getAllEntries((err, entries) => {
        if(!err) {
          return res.status(200).send(entries);
        } else {
          return err;
        }
      })
    },
    addEntry: (req, res) => {
      let entry = req.body.entry
      let db = app.get('db');
      // console.log(req.body.entry);
      db.addEntry([entry.user_id, entry.who, entry.location, entry.why, entry.breakfast, entry.lunch, entry.dinner, entry.home, entry.golf, entry.cocktails, entry.other, entry.total1, entry.total2, entry.total3], (err) => {
        if(!err) {
          // console.log(entry);
          res.status(200).send(entry);
        } else {
          // console.log(err);
          return err;
        }
      })
    },
    getUsers: (req, res) => {
      let db = app.get('db');
      db.getAllUsers((err, users) => {
        if(!err) {
          return res.status(200).send(users);
        } else {
          return err;
        }
      })
    }
  }
