const pedirFacturas = (req,res,db)=>{
    db.select('*').from('facturas')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarFacturas = (req,res,db)=>{
    const {fecha,nFactura,descripcion,monto,idProveedor,estatus} = req.body;
    db('facturas').insert({
        fecha,
        nFactura,
        descripcion,
        monto,
        idProveedor,
        estatus
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirFacturas,
    registrarFacturas
}