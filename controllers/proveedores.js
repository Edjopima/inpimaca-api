const pedirProveedores = (req,res,db)=>{
    db.select('*').from('proveedores')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarProveedor = (req,res,db)=>{
    const {nombre,alias,nTelefono} = req.body;
    db('proveedores').insert({
        nombre,
        alias,
        nTelefono
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
const modificarProveedor = (req,res,db) => {
    const {id,nombre,alias,nTelefono} = req.body;
    db('proveedores').where('id','=',id)
    .update({
        nombre,
        alias,
        nTelefono
    })
}

module.exports={
    pedirProveedores,
    registrarProveedor,
    modificarProveedor
}