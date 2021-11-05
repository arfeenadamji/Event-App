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

mongoose.connection.on('connected', () => {
    console.log('connnected to mongo')
});
mongoose.connection.on('error', (err) => {
    console.log('this is error', err);
});

app.get('/', (req, res) => {
    res.send("Welcome to node js ec2")
})

// new user
app.post('/register', async (req, res) => {
    let newUser = new User()
    newUser.email = req.body.email
    console.log('user ID on Login', req.body)
    newUser.password = await bcrypt.hash(req.body.pass, 10)
    newUser.firstName = req.body.firstName
    newUser.lastName = req.body.lastName
    newUser.save((err, doc) => {
        console.log('err from new user',err)
        // console.log('doc', doc)
    });
    // console.log(req.body)
    res.send("Welcome to app")
});

//validate User
app.post('/login', async (req, res) => {
    await User.find({ email: req.body.email }).exec(async (err, resp) => {
        if (err) {
            console.log('err from validate user', err)
        }
        else {
            if (resp.length > 0) {
                let ismatch = bcrypt.compareSync(req.body.pass, resp[0].password)
                if (ismatch) {
                    return res.send({ message: 'user exist', status: true, data: resp })
                } else {
                    return res.send({ message: 'invalid password', status: false, data: resp })
                }
            } else {
                res.send({ message: 'user not found', status: false, data: resp })
            }
        }
    })
})

// updateUser
app.post('/updateUser', async (req, res) => {
    console.log("req.body of updatee user", req.body)
    await User.findOneAndUpdate({ _id: req.body.id }, { ...req.body }, { new: true }).exec((err, resp) => {
        if (err) {
            console.log('err from update user', err)
        }
        else {
            console.log('user', resp)
            if (resp.length > 0) {
                res.send({ message: 'user exist', status: true, data: resp })
            } else {
                res.send({ message: 'user not found', status: false, data: resp })
            }
        }
    })
})

// getUser
app.get('/getElement', async (req, res) => {
    console.log("req.body", req.body)
    await User.find().exec((err, resp) => {
        if (err) {
            console.log('err finding', err)
        }
        else {
            console.log('user authenticate')
            console.log('user', resp)
            if (resp.length > 0) {
                res.send({ message: 'user exist', status: true, data: resp })
            } else {
                res.send({ message: 'user not found', status: false, data: resp })
            }
        }
    })
})

// new Event
app.post('/createEvent', async (req, res) => {
    let newEvent = new Event()
    newEvent.eventTitle = req.body.title
    newEvent.eventVenue = req.body.venue
    newEvent.eventFee = req.body.fee
    newEvent.eventDate = req.body.date
    newEvent.eventTime = req.body.time
    newEvent.userId = req.body.userId

    newEvent.save((err, doc) => {
        console.log('err form new event', err)
        console.log('doc from new event', doc)
    });
    console.log(req.body)
    res.send("Welcome to app")
})

// get Event
app.post('/getEvent', async (req, res) => {
    console.log("req.body from get Event", req.body)
    let myId = req.body.userId;
    let query = {}
    if (myId) {
        query = { userId: myId }
    }
    console.log('userId:req.body.userId._id', myId)
    await Event.find(query).populate({
        path: 'userId',
        populate: [
          {path: 'eventId',},
        ],
      }).exec((err, resp) => {
        if (err) {
            console.log('err finding from getEvent', err)
        }
        else {
            console.log('user from get event', resp)
            if (resp.length > 0) {
                res.send({ message: 'user exist', status: true, data: resp })
            } else {
                res.send({ message: 'user not found', status: false, data: resp })
            }
        }
    })
})

// other's Event
app.post('/otherEvent', async (req, res) => {
    console.log("req.body", req.body)
       await Event.find({ userId: { $ne: req.body.userId } }).exec((err, resp) => {
        if (err) {
            console.log('err finding', err)
        }
        else {
            console.log('user', resp)
            if (resp.length > 0) {
                return res.send({ message: 'user exist', status: true, data: resp })
            } else {
                return res.send({ message: 'user not found', status: false, data: resp })
            }
        }
    })
})

//join Event
app.post('/joinEvent', async(req,res)=>{
    console.log("req body from join Event", req.body)
  await User.findOne({_id:req.body.userId}).populate('eventId').exec(async (err, user) =>{
        console.log('user from join',user)      
        if (err) {
            console.log('err finding from join event', err)
        }
        else {
            // console.log('user', user)
            let temp =[...user.eventId]
            temp.push(req.body.eventId)
            user.eventId = temp
            await user.save()
        }
        // res.send({message:'done'})
    })
})


// delete Event
app.post('/deleteEvent',async(req,res) =>{
    console.log("req body from delete event", req.body)

    if(req.body.type =='created'){
        await Event.findOneAndDelete({_id:req.body.eventId})
    }
    else{
        await User.findOne({_id:req.body.userId}).exec((err,user) =>{
            console.log('user from join',user)      
            if (err) {
                console.log('err finding from delete event', err)
            }
            else {
               console.log("user form delete event", user)
            let tempIndex = user.eventId.findIndex((id) => id == req.body.eventId)
            if(tempIndex != -1)
            {
                console.log(tempIndex)
                user.eventId.splice(tempIndex,1)
                user.save()
            }

            }
        })
    }


})
app.listen(3000, () => {
    console.log('server start')
});