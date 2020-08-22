const iniciarSesion = (req,res,db,bcrypt) => {
    const {user,contraseña} = req.body;
    if (!user||!contraseña){
        res.status(400).json('incorrect form submission');
    }else{
    db.select('user','hash').from('login').where('user','=',user)
    .then(data=>{
        const isValid = bcrypt.compareSync(contraseña, data[0].hash);
        if (isValid) {
            return db.select('*').from('users')
            .where('user', '=', user)
            .then(user => res.json(user[0]))
            .catch(err => res.status(400).json(err));
        }else{
            res.status(400).json('wrong credentials')
        }
    })}
}

module.exports={iniciarSesion}