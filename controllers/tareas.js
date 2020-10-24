const pedirTareas = (req,res,db)=>{
    db.select('*').from('tasks')
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err));
}

const registrarTarea = (req,res,db)=>{
    const {title,task,state,lastEdit} = req.body;
    db('tasks').insert({
        task,
        state,
        lastEdit,
        title
    })
    .then(()=>res.json('Registro exitoso'))
    .catch((err)=>res.status(400).json(err));
}

const modificarTareas = (req,res,db) => {
    const {title,task,id,user} = req.body;
    db('tasks').where('id','=',id)
    .update({
        title,
        task,
        lastEdit:user
    })
}

module.exports={
    pedirTareas,
    registrarTarea,
    modificarTareas
}