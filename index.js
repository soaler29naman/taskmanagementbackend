const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');
require('dotenv').config()

const app = express();
app.use(express.json());

app.use(morgan('dev'));
Password="jysnJOxXiLITFIKm"
mongoose.connect(
    `mongodb+srv://namanmaurya29002:${process.env.Password}@cluster0.0xvrzsf.mongodb.net/todoapp`, 
    { useNewUrlParser: true,
        useUnifiedTopology: true  }
        );

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3000,(error)=>{
    if(!error){
        console.log("Server Running on Port "+3000);
    }
    else{
        console.log("Error: "+error);
    }
})