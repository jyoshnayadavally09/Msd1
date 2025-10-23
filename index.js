const exp = require('express');
const fs = require('fs');
const app = exp();

app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.set('view engine', 'ejs');

let books = [
  {
    title: "lion the king",
    author: "jyoshna",
    price: 1234
  },
  {
    title: "harry poter",
    author: "king",
    price: 1222
  },
  {
    title: " poter",
    author: "king",
    price: 1222
  }

];

fs.writeFileSync('books.json', JSON.stringify({ books }, null, 2));

app.get('/books', (req, res) => {
  const data = fs.readFileSync('books.json');
  const parsed = JSON.parse(data);
  res.json(parsed.books);
});

app.post('/books', (req, res) => {
  const { title, author, price } = req.body;
  const data = fs.readFileSync('books.json');
  const parsed = JSON.parse(data);
  parsed.books.push({ title, author, price });
  fs.writeFileSync('books.json', JSON.stringify(parsed, null, 2));
  res.redirect('/books');
});

app.get('/books/new', (req, res) => {
  res.render('new');
});

app.get('/', (req, res) => {
  res.send('its done');
});

app.listen(3000, () => {
  console.log('its working on port 3000');
});
