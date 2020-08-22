const registrarUsuario = (req,res,db,bcrypt,salt) =>{
    const {nombre,user,email,contraseña,permisos} = req.body;
    const hash = bcrypt.hashSync(contraseña, salt);
    db.transaction(trx => {
    trx.insert({
        hash: hash,
        user: user
    })
    .into('login')
    .returning('user')
    .then(loginUser => {
        return trx('users')
        .returning('*')
        .insert({
            email: email,
            nombre: nombre,
            user:loginUser[0],
            permisos:permisos
        })
        .then(user => {
            res.json(user[0]);
        })
    })
    .then(()=>{
        trx.commit();
    })
    .catch((err)=>{
        trx.rollback();
        res.status(400).json(err)
        })
    })
    .catch((err)=>res.status(400).json(err));
}

module.exports={registrarUsuario}