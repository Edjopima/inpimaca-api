const pedirLotes = (req,res,db)=>{
    db.select('*').from('lotes')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarLote = (req,res,db)=>{
    const {nLote,fecha,monto,banco} = req.body;
    db('lotes').insert({
        nLote,
        fecha,
        monto,
        banco
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirLotes,
    registrarLote
}