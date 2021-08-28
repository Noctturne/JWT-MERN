const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
    const {password} = req.body;
    try {
        let user;

        user = new User(req.body);

        const salt = await bcrypt.genSalt(7);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.send('User created!');
        
    } catch (e) {
        console.log(e);
        res.status(400).send('Err');
    }
}