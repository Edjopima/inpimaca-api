const pedirDeudores = (req,res,db)=>{
    db.select('*').from('debtors')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarDeudor = (req,res,db)=>{
    const {title,debt,lastEdit} = req.body;
    db('debtors').insert({
        title,
        debt,
        lastEdit
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}

const modificarDeuada = (req,res,db) => {
    const {title,debt,id,user} = req.body;
    db('debtors').where('id','=',id)
    .update({
        title,
        debt,
        lastEdit:user
    })
}

module.exports={
    pedirDeudores,
    registrarDeudor,
    modificarDeuada
}