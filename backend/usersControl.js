const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  login: (req, res) => {
    let user = req.body;
    let userInfo = [user.email, user.password];
    let db = app.get('db');
    // console.log(user, userInfo)
    db.login((userInfo), (err) => {
      if (!err) {
        // req.session.user = user;
        res.status(200).send(user);
      } else {
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
