const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    // Leer el token del Header
    const token = req.header('x-auth-token');

    // Revisar si no hay token
    if(!token){
        return res.status(401).json({msg: 'Invalid Token'});
    }
    // Validarlo
    try {
        const encode = jwt.verify(token, process.env.JWT_WORD);
        req.user = encode.user;
        next();
    } catch (e) {
        return res.status(401).json({msg: 'Invalid Token'});
    }
}