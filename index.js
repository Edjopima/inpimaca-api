const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const db =knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'edjopima',
    password : '15101998',
    database : 'inpimaca'
    }
})

const {pedirInventario} = require('./controllers/inventario');
const {registrarUsuario} = require('./controllers/registrar');
const {iniciarSesion} = require('./controllers/iniciarSesion');
const {pedirProveedores, registrarProveedor} = require('./controllers/proveedores');
const {cuentasProveedores, registrarCuentas, registrarCuenta} = require('./controllers/cuentasProveedores');

const app = express();
app.use(bodyParser.json());

app.get('/',(req,res) => pedirInventario(req,res,db));
app.post('/registrar',(req,res) => registrarUsuario(req,res,db,bcrypt,salt));
app.post('/iniciarSesion',(req,res) => iniciarSesion(req,res,db,bcrypt));
app.get('/proveedores',(req,res) => pedirProveedores(req,res,db));
app.post('/registrarProveedor',(req,res) => registrarProveedor(req,res,db));
app.get('/cuentasProveedores', (req,res) => cuentasProveedores(req,res,db));
app.post('/registrarCuenta', (req,res) => registrarCuenta(req,res,db));
app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})