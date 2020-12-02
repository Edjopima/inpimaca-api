const lastDolarValue = (req,res,db) => {
    db.select('*').from('dolarHistory')
        .then((data)=>res.json(data))
        .catch((err)=>res.status(400).json(err));
}

const addDolarValue = (req,res,db) => {
    const {dolar,date} = req.body;
     db.select('*').from('dolarHistory')
        .then((data)=>{
            console.log(data)
            console.log(dolar,date)
        })
        .catch((err)=>res.status(400).json(err));
}

module.exports= {
    lastDolarValue,
    addDolarValue
}
