const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
require('dotenv').config();
const db =knex({
    client: 'pg',
    connection: {
    host : process.env.DATABASE_URL,
    ssl:true
    }
});

const {pedirInventario} = require('./controllers/inventario');
const {registrarUsuario} = require('./controllers/registrar');
const {iniciarSesion} = require('./controllers/iniciarSesion');
const {pedirProveedores, registrarProveedor} = require('./controllers/proveedores');
const {cuentasProveedores, registrarCuenta} = require('./controllers/cuentasProveedores');
const {pedirFacturas, registrarFacturas} = require('./controllers/facturas');
const {pedirLotes, registrarLote} = require('./controllers/lotes');


const app = express();
app.use(bodyParser.json());

app.get('/',(req,res) => pedirInventario(req,res,db));
app.post('/registrar',(req,res) => registrarUsuario(req,res,db,bcrypt,salt));
app.post('/iniciarSesion',(req,res) => iniciarSesion(req,res,db,bcrypt));
app.get('/proveedores',(req,res) => pedirProveedores(req,res,db));
app.post('/registrarProveedor',(req,res) => registrarProveedor(req,res,db));
app.get('/cuentasProveedores', (req,res) => cuentasProveedores(req,res,db));
app.post('/registrarCuenta', (req,res) => registrarCuenta(req,res,db));
app.get('/facturas' ,(req,res) => pedirFacturas(req,res,db));
app.post('/registrarFactura', (req,res) => registrarFacturas(req,res,db));
app.get('/lotes', (req,res) => pedirLotes(req,res,db));
app.post('/registrarLote', (req,res) => registrarLote(req,res,db));
app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}` );
})