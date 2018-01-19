const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  login: (req, res) => {

    let user = req.body;
    let userInfo = [user.email, user.password];
    let db = app.get('db');
    db.login(userInfo, (err, user) => {
      if (!err) {
        // if(dbRecords.length == 0) {
        //   res.status(204).send("0")
        // } else if(dbRecords.length > 0) {
        //   req.session.user = user;
        //   res.status(200).send(user);
        //   console.log("At usersControl", req.session.user);
        // }
        req.session.user = user;
        // console.log("please work", user[0])
        res.status(200).send(user);
        // console.log("2nd attempt from the back", req.session.user[0]);
      } else {
        console.log(err);
        res.send(err)
      }
    });
  },

  getUserEntries: (req, res) => {
    // console.log("******");
    // console.log(req.session.user);
    let id = req.body.user_id;
    let db = app.get('db');
    // console.log("usersControl", id);
    // console.log(req)

    db.getUserEntries((id), (err, entries) => {
      if(!err) {
        // console.log(entries)
        res.status(200).send(entries);
      } else {
        console.log(err);
        res.send(err);
      }
    })
  },

  getSingleEntry: (req, res) => {
    let item = req.params.id;
    let db = app.get('db');
    db.getSingleEntry(item, (err, item) => {
      if(!err) {
        res.status(200).send(item)
      } else {
        return err;
      }
    })
  },

  userAddEntry: (req, res) => {
    let entry = req.body.entry
    let id = req.body.id;
    let db = app.get('db');

    console.log("usersControl", id)

    db.userAddEntry([id, entry.date, entry.time, entry.who, entry.location, entry.why, entry.breakfast, entry.lunch, entry.dinner, entry.golf, entry.cocktails, entry.office_supplies, entry.beg_miles, entry.end_miles, entry.other], (err) => {
      if(!err) {
        console.log(entry);
        res.status(200).send(entry);
      } else {
        console.log(err);
        return err;
      }
    })
  },

  checkLoginStatus: (req, res) => {
    console.log('in function');
    if (req.session) {
      // delete req.session.user[0].password;
      // res.status(200).send(req.session.user[0]);
      console.log("userControl", req.session);
    } else {
      console.log("$$$!!!$$$ not working $$$!!!$$$")
      // res.status(201).send();
    }
  }

};
