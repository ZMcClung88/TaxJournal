const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  resgister: (req, res) => {
    let user = req.body.user;
    let db = app.get('db');
    db.add_user([user.first_name, user.last_name, user.email, user.username, user.passphrase, user.newsletter], (err, user) => {
      if(!err) {
        res.send(user);
      } else {
        res.send(err);
      }
    })
  }
}
