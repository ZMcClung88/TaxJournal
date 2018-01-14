const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  login: (req, res) => {
    // console.log("******");
    // console.log(req.session);
    let user = req.body;
    let userInfo = [user.email, user.password];
    let db = app.get('db');
    db.login((userInfo), (err, dbRecords) => {
      if (!err) {
        if(dbRecords.length == 0) {
          res.status(204).send("0")
        } else if(dbRecords.length > 0) {
          req.session.user = user;
          res.status(200).send(dbRecords);
          // console.log(dbRecords);
        }
      } else {
        console.log(err);
        res.send(err)
      }
    });
  },

  getUserEntries: (req, res) => {
    let id = req.body.user_id;
    let db = app.get('db');
    // console.log(id);
    // console.log(req)

    db.getUserEntries((id), (err, entries) => {
      if(!err) {
        // console.log(entries)
        res.send(entries);
      } else {
        console.log(err);
        res.send(err);
      }
    })
  },

  userAddEntry: (req, res) => {
    let entry = req.body
    let id = req.body.user_id;
    let db = app.get('db');
    // console.log("user_id", id);
    // console.log("here in the backend!!!");
    console.log("usercontrol id", id);
    db.userAddEntry([id, entry.date, entry.time, entry.who, entry.location, entry.why, entry.breakfast, entry.lunch, entry.dinner, entry.golf, entry.cocktails, entry.office_supplies, entry.beg_miles, entry.end_miles, entry.other], (err) => {
      if(!err) {
        // console.log("whoooopiiii");
        res.status(200).send(entry);
      } else {
        console.log(err);
        return err;
      }
    })
  },

  // checkLoginStatus: (req, res) => {
  //   console.log('in function');
  //   if (req.session.user) {
  //     delete req.session.user[0].password;
  //     res.status(200).send(req.session.user[0]);
  //   } else {
  //     res.status(201).send();
  //   }
  // }

};
