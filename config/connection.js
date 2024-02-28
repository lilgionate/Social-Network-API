// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the mongoDB database using the MongoDB URI provided in the enviroment
// variables or using the default URI if the enviroment variable is not set
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/lilgionate', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection