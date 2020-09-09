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

const modificarDeuada = (req,res,db) => {
    const {titulo,deuda,id,user} = req.body;
    db('deudores').where('id','=',id)
    .update({
        titulo,
        deuda,
        ultimoEdit:user
    })
}

module.exports={
    pedirDeudores,
    registrarDeudor,
    modificarDeuada
}