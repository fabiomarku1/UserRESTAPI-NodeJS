const express = require('express');
const UserController = require('../controller/UserController');

const app = express();

app.get('/users', UserController.getAll);
app.get('/users/:id', UserController.getById);
app.post('/users', UserController.create);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);

app.listen(3000, () => console.log('Server started on port 3000'));

