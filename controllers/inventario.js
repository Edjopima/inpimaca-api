const pedirInventario = (req,res,db) =>{
    db.select('*').from('Lista de precios')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const agregarElemento = (req,res,db) => {
    const {producto,precio,categoria} = req.body;
    db('Lista de precios').insert({
        Producto:producto,
        Precio:precio,
        Categoria:categoria
    })
}

const actualizarElemento = (req,res,db) =>{
    const {id,profucto,precio,categoria} = req.body;
    db('Lista de precios').where('id','=',id)
    .update({
        Producto:producto,
        Precio:precio,
        Categoria:categoria
    })
}

module.exports={
    pedirInventario,
    agregarElemento,
    actualizarElemento
}