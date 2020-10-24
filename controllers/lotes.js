const pedirLotes = (req,res,db)=>{
    db.select('*').from('lots')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarLote = (req,res,db)=>{
    const {lot,date,amount,bank} = req.body;
    db('lots').insert({
        lot,
        date,
        amount,
        bank
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirLotes,
    registrarLote
}