const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!!';

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(userGoal);
});

app.listen(3000, _ => {
  console.log("Listening on port 3000");
});
