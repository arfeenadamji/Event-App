const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const User = require('./models/user')
app.use(bodyParser.json())

const Event = require('./models/event')
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
    res.send("Welcome to node js ec2")
})

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

//validate User
app.post('/login',async (req,res) =>{
    console.log("req.body123",req.body)
    await User.find({email:req.body.email}).exec(async(err,resp)=>{
        if(err){
            console.log('err finding',err)
        }
        else{
            if(resp.length > 0){
                console.log('user123',resp[0].password)
                let ismatch = bcrypt.compareSync(req.body.pass, resp[0].password)
                if(ismatch){
                   return res.send({message:'user exist',status:true,data:resp})       
                }else{
                   return res.send({message:'invalid password',status:false,data:resp})
                }
             }else{
                res.send({message:'user not found',status:false,data:resp})
            }
        }
    })
 })

// updateUser
 app.post('/updateUser',async (req,res) =>{
    console.log("req.body of updatee user",req.body)
    await User.findOneAndUpdate({_id:req.body.id},{...req.body},{new:true}).exec((err,resp)=>{
        if(err){
            console.log('err finding from',err)
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

 // new Event

 app.post('/createEvent', async(req,res) =>{
     let newEvent = new Event()
     newEvent.eventTitle = req.body.title
     newEvent.eventVenue = req.body.venue
     newEvent.eventDate = req.body.date
     newEvent.eventTime = req.body.eventTime
     newEvent.eventFee = req.body.fee
    //  console.log('req.body for event' req.body)
    newEvent.save((err, doc) =>{
        console.log(err)
        console.log('doc', doc)
    });
 })

app.listen(3000,() =>{
    console.log('server start')
});
