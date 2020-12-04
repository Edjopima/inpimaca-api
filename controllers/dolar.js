const lastDolarValue = (req,res,db) => {
    db.select('*').from('dolarHistory')
        .then((data)=>{
            const dolarToday = data[data.length - 1].dolarToday
            const date = data[data.length - 1].date
            const dolar = data[data.length - 1].dolar
            res.json({date, dolarToday,dolar})
        })
        .catch((err)=>res.status(400).json(err));
}

const addDolarValue = (req,res,db) => {
    const {dolarToday,date,dolar} = req.body;
    db('dolarHistory').insert({
        dolar,
        date,
        dolarToday
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json('error'));
}


module.exports= {
    lastDolarValue,
    addDolarValue
}
