const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sahan:Sa**1994@cluster0-7xoy9.mongodb.net/test?retryWrites=true",{ useNewUrlParser:true });
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB database connection establish successfully");
})

app.listen(PORT,function(){
    console.log("Server is running on port:" + PORT );
});

