const express = require('express');
const app = express();
const port = 3000;

// implement API routes
const authorsAPI = require('./server/authors-api');
const booksAPI = require('./server/books-api');
app.use('/authors', authorsAPI);
app.use('/books', booksAPI);
// catch all other routes and return just a simple message
app.all('*', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express Test app listening on port ${port}!`));