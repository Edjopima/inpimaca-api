const pedirDeudores = (req,res,db)=>{
    db.select('*').from('deudores')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarDeudor = (req,res,db)=>{
    const {titulo,deuda,ultimoEdit} = req.body;
    db('deudores').insert({
        titulo,
        deuda,
        ultimoEdit
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirDeudores,
    registrarDeudor
}