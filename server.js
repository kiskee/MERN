const express = require('express');
const app = express();

// Conexion to DB
const dbFile = require('./conn');


// Routes

app.get('/',(req, res)=> {
    res.end('Welcome to gets server')
})


// Config
app.listen(3000, function(){
    console.log('Server is running')
})