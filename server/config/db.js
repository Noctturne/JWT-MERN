  
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env'});

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
        });
        console.log("DB is running");

    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDB;