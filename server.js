const app = require("./app");
const uri = process.env.mongodb_uri;
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;

const db = async () => {
    mongoose.connect(uri).then( () => {
    console.log("db connected successfully");
    });
}

db();


app.listen(PORT, ()=>console.log(`Listening on PORT:${PORT}`));