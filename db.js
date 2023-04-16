const mongoose = require('mongoose');
// const express = require('express')

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI = "mongodb://127.0.0.1:27017/user"
const mongoURI = "mongodb+srv://jp771993:L2gqvDD8U54graSz@cluster0.tguafv0.mongodb.net/user?retryWrites=true&w=majority"



const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
/* 
const connectToMongo = async() => {
    await mongoose.connect(mongoURI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
    });
    return mongoose;
}; */

// await connectToMongo().then(async() => console.log('connected yeee'));

module.exports = connectToMongo;