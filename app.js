const express = require("express"); //nie korzystam już z http!!
const port = 3000; 
const app = express(); 
//gdy uzytkownik wchodzi na stronę główną
app.get('/', function (req, res) { 
 res.send("Hello World"); 
}) 
app.listen(port) 