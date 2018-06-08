function addRows(conn){
  const sql = "INSERT INTO Cleitne(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste2', '09876543210'],
        ['teste3', '12312312399']
      ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}