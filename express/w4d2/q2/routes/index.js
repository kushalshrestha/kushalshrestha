var express = require('express');
var router = express.Router();

let answers = [
  'It is Certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '8 ball' });
});

router.get('/8ball', (req, res) => {
  let answer = answers[Math.floor(Math.random() * answers.length)];
  res.send({ answer: answer });
});

module.exports = router;
