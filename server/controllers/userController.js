const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const {password} = req.body;
    try {
        let user;

        user = new User(req.body);

        const salt = await bcrypt.genSalt(7);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Crear JWT
        const payload = {
            user: {
                id: user.id
            }
        }
        //Firmarlo 
        jwt.sign(payload, process.env.JWT_WORD, {
            expiresIn: 3600 // 1 hora
        }, (err, token) => {
            if(err) throw err;

            res.json({token});
        });

       
        
    } catch (e) {
        console.log(e);
        res.status(400).send('Err');
    }
}