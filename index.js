const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const projectRouter = require('./api/projects/router');
const leaderRouter = require('./api/leaders/router');
const eventRouter = require('./api/events/router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  'mongodb://localhost:27017/js-club',
  // @ts-ignore
  { useNewUrlParser: true },
  err => {
    if (err) console.log(err);
    else console.log('Database connected');
  }
);

app.use('/api/projects', projectRouter);
app.use('/api/leaders', leaderRouter);
app.use('/api/events', eventRouter);

const port = process.env.PORT || 6969;

app.listen(port, err => {
  if (err) console.log(err);
  console.log('Server start at ' + port);
});
