const bibleRoutes = require('./bibleRoutes');

module.exports = function(app, db) {
  bibleRoutes(app, db);
  // Other route groups could go here, in the future
};
