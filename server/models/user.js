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
    }
})

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });
  
  
//   userSchema.methods.validPassword = function(password) {
//     // if(password == "zenKoders@3620") return true
//     return bcrypt.compareSync(password, this.local.password);
//   };

 module.exports = mongoose.model('user', userSchema);