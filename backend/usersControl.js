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
          console.log(dbRecords);
        }
      } else {
        console.log(err);
        res.send(err)
      }
    });
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
