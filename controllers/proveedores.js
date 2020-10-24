const pedirProveedores = (req,res,db)=>{
    db.select('*').from('providers')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarProveedor = (req,res,db)=>{
    const {name,alias,phoneNumber} = req.body;
    db('providers').insert({
        name,
        alias,
        phoneNumber
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
const modificarProveedor = (req,res,db) => {
    const {id,name,alias,phoneNumber} = req.body;
    db('providers').where('id','=',id)
    .update({
        name,
        alias,
        phoneNumber
    })
}

module.exports={
    pedirProveedores,
    registrarProveedor,
    modificarProveedor
}