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
      db.addEntry([entry.date, entry.time, entry.who, entry.location, entry.why, entry.breakfast, entry.lunch, entry.dinner, entry.golf, entry.cocktails, entry.office_supplies, entry.beg_miles, entry.end_miles, entry.other], (err) => {
        if(!err) {
          // console.log(entry);
          res.status(200).send(entry);
        } else {
          // console.log(err);
          return err;
        }
      })
    },
   //  getSingleProduct: (req, res) => {
   // let search = req.params.id;
   // db.get_single_product([search], (err, product) => {
   //   if (!err) {
   //     res.status(200).send(product);
   //   } else {
   //     res.send(err);
   //   }
   // });
    getSingleDemo: (req, res) => {
      let item = req.params.id;
      let db = app.get('db');
      db.getSingleDemo(item, (err, item) => {
        if(!err) {
          res.status(200).send(item)
        } else {
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
