const express = require('express');
const app = express();
const friendNames = [
  { 
    firstName: 'Devon', 
    lastName: 'Stanton'
  },
  { 
    firstName: 'Monique', 
    lastName: 'Bonafini'
  }
];

app.set('view engine','pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in grants Tomb?", hint: "Think about who's tomb it is?"});
});

app.get('/sandbox', (req, res) => {
  res.render('sandbox');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});
