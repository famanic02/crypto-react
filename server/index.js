/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
require('dotenv').config();
const express = require('express');
const path = require('path');
// const proxy = require('http-proxy-middleware');

const app = express();

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// const API_URL = process.env.REACT_APP_API_URL;

// app.use(
//   '/api',
//   proxy({
//     target: API_URL,
//     changeOrigin: true,
//     pathRewrite: { '^/api': '' }, // remove leading /api to match real API urls
//     logLevel: 'info',
//   }),
// );

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('App listening ...');
});
