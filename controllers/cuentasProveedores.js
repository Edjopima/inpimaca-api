const cuentasProveedores = (req,res,db) => {
    db.select('*').from('cuentas de proveedores')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarCuenta = (req,res,db) => {
    console.log(req.body);
    const {nombre,ci,nCuenta,banco,idProveedor} = req.body;
    console.log
    db('cuentas de proveedores').insert({
        nombre,
        ci,
        nCuenta,
        banco,
        idProveedor
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}

const modificarCuenta = (req,res,db) => {
    const {id,nombre,ci,nCuenta,banco} = req.body;
    db('cuentas de proveedores').where('id','=',id)
    .update({
        nombre,
        ci,
        nCuenta,
        banco
    })
}

module.exports = {
    cuentasProveedores,
    registrarCuenta,
    modificarCuenta
}