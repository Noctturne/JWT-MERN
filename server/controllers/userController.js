const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        let user;

        user = new User(req.body);
        await user.save();
        res.send('User created!');
        
    } catch (e) {
        console.log(e);
        res.status(400).send('Err');
    }
}