const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
});

router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
});

router.post('/produto', (req, res) =>{
    const a = req.body
    res.json(a);
});

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : '',
        database : 'tardis'
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error) 
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}