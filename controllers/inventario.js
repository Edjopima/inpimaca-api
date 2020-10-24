const pedirInventario = (req,res,db) =>{
    db.select('*').from('inventory')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const agregarElemento = (req,res,db) => {
    const {product,price,category} = req.body;
    db('inventory').insert({
        product:product,
        price:price,
        category:category
    })
}

const actualizarElemento = (req,res,db) =>{
    const {id,product,price,category} = req.body;
    db('inventory').where('id','=',id)
    .update({
        product:product,
        price:price,
        category:category
    })
}

module.exports={
    pedirInventario,
    agregarElemento,
    actualizarElemento
}