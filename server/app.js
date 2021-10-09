const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./models/user')
app.use(bodyParser.json())

const mongooseUrl = "mongodb+srv://Arfeen:abcd1234@cluster0.spvug.mongodb.net/test"; 

mongoose.connect(mongooseUrl)

mongoose.connection.on('connected', () =>{
    console.log('connnected to mongo')
});
mongoose.connection.on('error', (err) =>{
    console.log('this is error' , err);
});

app.get('/', (req,res) =>{
    res.send("Welcome to node js")
})
app.post('/app',async (req,res) =>{
   //validate User
   await User.find({email:req.body.email}).exec((err,resp)=>{
       if(err){
           console.log('err finding',err)
       }
       else{
           console.log('user',resp)
           if(resp.length > 0){
               res.send({message:'user exist',status:false,data:resp})
            }else{
               res.send({message:'user exist',status:true,data:resp})
           }
       }
   })
    //new user
    // let newUser  =  new User()
    // newUser.email = req.body.email
    // newUser.password = req.body.pass
    // newUser.save((err,doc)=>{
    //     console.log(err)
    //     console.log('doc',doc)
    // });
    // console.log(req.body)
    
    // res.send("Welcome to app")
})
app.listen(3000,() =>{
    console.log('server start')
});

