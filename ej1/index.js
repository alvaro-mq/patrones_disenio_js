const express = require('express');
const parser = require('body-parser');
const services = require('./services');
const handlify = require('./handlers');
const app = express();
const port = 3000;

const usersHandlers = handlify('users');
const postsHandlers = handlify('posts');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json())

app.get('/', usersHandlers(services).get);
app.post('/', usersHandlers(services).post);
app.put('/:id', usersHandlers(services).put);
app.delete('/:id', usersHandlers(services).delete);

app.get('/posts', postsHandlers(services).get);

app.listen(port, () => console.log(`Example1 app listening on port ${port}`));