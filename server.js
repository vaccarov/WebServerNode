const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use((req,res,next) => {
  console.log(req.query);
  next();
});
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('up',(text) => {
  return text.toUpperCase();
});

app.get('/',(req,res) => {
  res.render('home.hbs',{
    year: new Date().getFullYear(),
    message: 'this will be up'
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    year: new Date().getFullYear()
  });
});

app.listen(port,() => {
  console.log(`SERVER IS ON ${port}`);
});
