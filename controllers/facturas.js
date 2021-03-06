const pedirFacturas = (req,res,db)=>{
    db.select('*').from('bills')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarFacturas = (req,res,db)=>{
    const {date,bill,description,amount,ProviderId,status} = req.body;
    db('bills').insert({
        date,
        bill,
        description,
        amount,
        ProviderId,
        status
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirFacturas,
    registrarFacturas
}