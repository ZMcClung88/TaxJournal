const app = require('.././index.js')
    , db = app.get('db');

module.exports = {
  register: (req, res) => {
    let user = req.body;
    let db = app.get('db');
    db.register([user.first_name, user.last_name, user.email, user.password, user.newsletter], (err) => {
      if(!err) {
        res.send(user);
      } else {
        res.send(err);
      }
    })
  }
}
