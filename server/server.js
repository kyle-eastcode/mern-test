const express = require('express');
var cors = require('cors');

const serverConfig = require('./config');
const router = require('./controller');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use('/', router);

app.listen(serverConfig, () => {
  console.log(`Server is listening on port ${serverConfig.port}`);
});