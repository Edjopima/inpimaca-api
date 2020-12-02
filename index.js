const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
require('dotenv').config();
const db =knex({ client: 'pg', connection: process.env.DATABASE_URL});

const {pedirInventario, agregarElemento, actualizarElemento, eliminarElemento} = require('./controllers/inventario');
const {registrarUsuario} = require('./controllers/registrar');
const {iniciarSesion} = require('./controllers/iniciarSesion');
const {pedirProveedores, registrarProveedor} = require('./controllers/proveedores');
const {cuentasProveedores, registrarCuenta} = require('./controllers/cuentasProveedores');
const {pedirFacturas, registrarFacturas} = require('./controllers/facturas');
const {pedirLotes, registrarLote} = require('./controllers/lotes');
const {lastDolarValue,addDolarValue} = require('./controllers/dolar');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/inventario',(req,res) => pedirInventario(req,res,db));
app.post('/eliminarProducto', (req,res) => eliminarElemento(req,res,db));
app.post('/agregarProducto', (req,res) => agregarElemento(req,res,db));
app.post('/actualizarProducto', (req,res) => actualizarElemento(req,res,db));
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
app.get('/dolar',(req,res) => lastDolarValue(req,res,db));
app.post('/addDolar', (req,res) => addDolarValue(req,res,db));
app.listen(process.env.PORT, ()=>{
console.log(`app is running on port ${process.env.PORT}` );
})
