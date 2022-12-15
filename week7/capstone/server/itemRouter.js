const express = require('express');
const uuid = require("uuid")
const itemRouter = express.Router() //verify with the router video
const mysql = require('mysql')


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database : 'avengers'
  });
   
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
itemRouter.get('/', (req, res) => {
    connection.query('SELECT * FROM avengers;', function (error, results, fields) {
        if (error) throw error;
       
      
        res.status(200).send(results)

    });
    

    
});





 itemRouter.put('/:url', (req, res, next) => {

   const url = req.params.url
  console.log(url)
  connection.query(`UPDATE avengers SET Gender= '${req.body.gender}' WHERE URL='${url}';`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  
    res.status(200).send('avenger was deleted successfully!')
 });
 });
 itemRouter.delete('/:url', (req, res, next) => {

   const url = req.params.url
  console.log(url)
  connection.query(`DELETE FROM avengers WHERE URL='${url}';`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  
    res.status(200).send('avenger was deleted successfully!')

});
 });


    itemRouter.post('/', (req, res) => {
        const post = req.body
        var query = connection.query('INSERT INTO avengers SET ?', post, function (error, results, fields) {
          if (error) throw error;
          res.status(201).send('avenger added')
        });
        console.log(query)
    });
 module.exports = itemRouter