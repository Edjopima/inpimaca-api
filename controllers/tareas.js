const pedirTareas = (req,res,db)=>{
    db.select('*').from('tareas')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarTarea = (req,res,db)=>{
    const {titulo,tarea,estado,creador} = req.body;
    db('tareas').insert({
        tarea,
        estado,
        creador,
        titulo
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}

const modificarTarea = (req,res,db) => {
    const {titulo,tarea,id,user} = req.body;
    db('tareas').where('id','=',id)
    .update({
        titulo,
        tarea,
        ultimoEdit:user
    })
}

module.exports={
    pedirTareas,
    registrartarea,
    modificarTarea
}