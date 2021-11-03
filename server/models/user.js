const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        unique:true,
        required:true
    },
    lastName:{
        type:String,
        unique:true,
        required:true
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"event"
    },
})

 module.exports = mongoose.model('user', userSchema);

 