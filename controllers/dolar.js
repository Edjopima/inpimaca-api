const lastDolarValue = (req,res,db) => {
    db.select('*').from('dolarHistory')
        .then((data)=>res.json(data))
        .catch((err)=>res.status(400).json(err));
}

const addDolarValue = (req,res,db) => {
    const {dolar,date} = req.body;
    db('dolarHistory').insert({
        dolar,
        date
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json('error'));
}

module.exports= {
    lastDolarValue,
    addDolarValue
}
