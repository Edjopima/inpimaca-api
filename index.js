const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const db =knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME
    }
})

const app = express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    db.select('*').from('Lista de precios')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(error));
})
app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})