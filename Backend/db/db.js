const mongoose = require('mongoose');
 const uri=process.env.DB_CONNECT;

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => console.log('Connected to DB'))
    .catch(err => console.log('DB connection error:', err));
}

module.exports = connectToDb;
