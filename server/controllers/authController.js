const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json({msg: 'User not exists'});
        }

        const correctPass = await bcrypt.compare(password, user.password);
        if(!correctPass){
            return res.status(400).json({msg: 'Incorrect password'});
        }

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
    }
}

exports.authenticated = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user});
    } catch (e) {
        console.log(e);
        res.status(500).json({msg: 'Err'});
    }
        
}