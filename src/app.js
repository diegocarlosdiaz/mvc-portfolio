  
const express = require('express');
const app = express();
const path = require('path')
const port= 3030;
const main = require('./routers/main')

app.use(express.static('public'))

app.use('/',main);

app.listen(port,()=>{
    console.log('Servidor levantado ' + port)
})