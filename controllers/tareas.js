const pedirTareas = (req,res,db)=>{
    db.select('*').from('tareas')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarTarea = (req,res,db)=>{
    const {tarea,estado,creador} = req.body;
    db('tareas').insert({
        tarea,
        estado,
        creador
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}
module.exports={
    pedirTareas,
    registrartarea
}