const path = require('path');

module.exports = function (app) {
  // index route loads view.html
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
};
