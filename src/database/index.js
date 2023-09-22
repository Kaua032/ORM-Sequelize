const Sequelize = require('sequelize'); // Importando o ORM sequelize.
const db = require('../config/database'); // Importantando o arquivo de configuração do banco de dados.
const User = require('../models/User')// Importando o modelo de tabela de users.

const connection = new Sequelize(db);// criando a conexão como banco de dados.

User.init(connection);// Inicializando a conexão com o banco de dados.
console.log("Connected DataBase");

module.exports = connection; // Exportando a conexão do banco de dados.

