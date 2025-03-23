// Carrega as variáveis de ambiente do arquivo .env

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });  //Caminho absoluto

// Configurar a conexão do node.js ao mysql

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

module.exports = connection;
