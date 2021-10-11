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
app.post('/register',async (req,res) =>{
   
    // new user
    let newUser  =  new User()
    newUser.email = req.body.email    
    newUser.password = req.body.pass // password from backend, body.pass=> from register component that we pass on req body
    newUser.save((err,doc)=>{
        console.log(err)
        console.log('doc',doc)
    });
    console.log(req.body)
    
    res.send("Welcome to app")
})
//validate User
app.post('/login',async (req,res) =>{
    console.log("req.body",req.body)
    await User.find({email:req.body.email,password:req.body.pass}).exec((err,resp)=>{
        if(err){
            console.log('err finding',err)
        }
        else{
            console.log('user authenticate')
            console.log('user',resp)
            if(resp.length > 0){
                res.send({message:'user exist',status:true,data:resp})
             }else{
                res.send({message:'user not found',status:false,data:resp})
            }
        }
    })
 })

 // getUser
 app.get('/getElement',async (req,res) =>{
    console.log("req.body",req.body)
    await User.find().exec((err,resp)=>{
        if(err){
            console.log('err finding',err)
        }
        else{
            console.log('user authenticate')
            console.log('user',resp)
            if(resp.length > 0){
                res.send({message:'user exist',status:true,data:resp})
             }else{
                res.send({message:'user not found',status:false,data:resp})
            }
        }
    })
 })


app.listen(3000,() =>{
    console.log('server start')
});

