const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'tardis'
});

connection.connect(function(err){
  if(err) return console.log(err);
  //console.log('Só vai!');
  alert('Só vai!');
})

document.getElementsByTagName("button").onclick = function () {
  alert("ta funfando")
  addRows(connection);
}


function addRows(conn){
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste2', '09876543210'],
        ['teste3', '12312312399']
      ];
  conn.query(sql, [values], function (error, results, fields){
    if(error) return console.log(error);
    //console.log('adicionou registros!');
    alert('adicionou registros!')
    conn.end();//fecha a conexão
  });
}