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

 module.exports = mongoose.model('user', userSchema);

 // new user
app.post('/register',async (req,res) =>{
    let newUser  =  new User()
    newUser.email = req.body.email    
    // newUser.password = req.body.pass // password from backend, body.pass=> from register component that we pass on req body
    console.log('req.body',req.body)
   newUser.password = await bcrypt.hash(req.body.pass,10)
    newUser.firstName = req.body.firstName
    newUser.lastName = req.body.lastName
    newUser.save((err,doc)=>{
        console.log(err)
        console.log('doc',doc)
    });
    console.log(req.body)
    res.send("Welcome to app")
});