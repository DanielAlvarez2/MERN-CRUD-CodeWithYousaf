const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users.js')
const dotenv = require('dotenv').config({path:'../.env'})

const app = express()

app.use(cors())
app.use(express.json()) //when sending data from front-end to back-end, will parse data into JSON format

mongoose.connect(process.env.MONGODB_ATLAS_URI)

app.post('/createUser', (req,res)=>{
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/', (req,res)=>{
    UserModel.find({})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
})

app.get('/getUser/:id', (req,res)=>{
    UserModel.findById(req.params.id)
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
    UserModel.findByIdAndUpdate({_id:req.params.id},
                                {name:req.body.name,
                                email:req.body.email,
                                age:req.body.age})
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
})

app.listen(2121, ()=>{
    console.log('Express Server is Running on Port 2121!')
})


