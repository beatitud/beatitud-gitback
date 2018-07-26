const express        = require('express');
const GitBack        = require('./gitBack');
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const port = 6000;

// Express can't process url encoded forms, we use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Create gitDB
var DB = new GitBack({
  directory: __dirname + '/gitDB',
  remote: "git@github.com:beatitud/gitstore.git",
  refreshRate: 30000, // Check remote for changes every 30s
});

DB.initialize(function(err) {
  app.use('/api', DB.router);
});

// Import all routes
// require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
