const cuentasProveedores = (req,res,db) => {
    db.select('*').from('providers account')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarCuenta = (req,res,db) => {
    console.log(req.body);
    const {name,ci,accountNumber,bank,providerId} = req.body;
    console.log
    db('providers account').insert({
        name,
        ci,
        accountNumber,
        bank,
        providerId
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