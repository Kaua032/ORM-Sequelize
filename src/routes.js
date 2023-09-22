const express = require('express');

const { store, index, update, deleteUser, finUserbyId } = require('./controllers/UserController.js'); // Importando o arquivo do UserController, que contêm as funções de criar, buscar, atualizar e deletar os dados do usuário.
const User = require('./models/User');

const routes = express.Router();

routes.post('/create', store); // Criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados.
routes.get('/findall', index);
routes.get('/update/:id', update);
routes.delete('/delete/:id', deleteUser);
routes.get('/:id', finUserbyId);

module.exports = routes