const pedirInventario = (req,res,db) =>{
    db.select('*').from('Lista de precios')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

module.exports={pedirInventario}