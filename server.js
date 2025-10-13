const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.send("nnnnn");
});

// Chats route
app.get('/chats', (req, res) => {
  const name = ["jyoshna", "bhavani"];
  res.render("chats", { name });
});

// ✅ Export app instead of listen (Vercel handles this)
module.exports = app;
