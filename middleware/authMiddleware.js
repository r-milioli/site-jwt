const jwt = require('jsonwebtoken')
require('dotenv').config()
//verificar o token - perfil

//verificar token
exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({ message: 'Acesso negado, Token não fornecido' })
    }
    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(error){
        res.status(400).json({ message: 'Token inválido' })
    }
    
}

//verificar perfil
exports.verifyPerfil = (perfilPermitido) => (req, res, next) => {
    if (req.user && req.user.perfil === perfilPermitido) {
        next();
    } else {
        res.status(403).json({ message: 'Acesso não autorizado.' });
    }
};