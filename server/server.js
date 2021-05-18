const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const serverConfig = require('./config');
const router = require('./controller');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Connect Database
mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.mongoURL, { useMongoClient: true })
  .then(() => console.log('Database has already connected !'))
  .catch((err) => console.err(err));

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