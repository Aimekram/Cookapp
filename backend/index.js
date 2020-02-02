const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');




//database connection
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB', err));


//PORT listening
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`cookapp is listening on port ${port}, wait for DB connection...`));