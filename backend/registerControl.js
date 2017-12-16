const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  // resgister: (req, res) => {
  //   let user = req.body.user;
  //   let db = app.get('db');
  //   db.register([user.first_name, user.last_name, user.email, user.password, user.newsletter], (err, user) => {
  //     if(!err) {
  //       res.send(user);
  //     } else {
  //       res.send(err);
  //     }
  //   })
  // }
}
