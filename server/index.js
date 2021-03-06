'use strict'

const app = require('./app');
// const db = require('./db');

const port = process.env.PORT || 3000;

const server = app.listen(process.env.PORT || 3000, err => {
  if (err) throw err;
  console.log('server listening on port', port);
  // db.sync()
  //   .then(() => {
  //     console.log('db sync completed')
  //   })
})

module.exports = server;
