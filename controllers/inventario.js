const pedirInventario = (req,res,db) =>{
    db.select('*').from('inventory')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const agregarElemento = (req,res,db) => {
    const {product,price,category} = req.body;
    db('inventory').returning('*').insert({
        product:product,
        price:price,
        category:category
    })
    .then((data)=>res.json(data[0]))
    .catch((err)=>res.status(400).json(err))
}

const actualizarElemento = (req,res,db) =>{
    const {id,product,price,category} = req.body;
    db('inventory').returning('*').where('id','=',id)
    .update({
        product:product,
        price:price,
        category:category
    })
    .then((data)=>res.json(data[0]))
    .catch((err)=>res.status(400).json(err))
}

const eliminarElemento = (req,res,db)=>{
    const {id} =req.body;
    db('inventory').where('id',id).del()
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

module.exports={
    pedirInventario,
    agregarElemento,
    actualizarElemento,
    eliminarElemento
}