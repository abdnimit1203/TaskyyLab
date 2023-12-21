
const express  = require("express")
const cors = require('cors');
require('dotenv').config()
const tasklist = require('./tasklist.json');
const app = express()
const port = process.env.PORT || 3000

// middleware

app.use(cors())
app.use(express.json())



app.get('/', (req,res)=>{
    res.send("My task information data server is running...")
})
app.get('/data', (req,res)=>{
    res.send("tak data ")
})
app.get('/tasklist', (req,res)=>{
    res.send(tasklist)
})

// id wise data without mongoDB
app.get('/tasklist/:id', (req,res)=>{
    const id = parseInt(req.params.id )     //very important!!!!

    console.log(id);
    const phone = tasklist.find(phone=>phone.id === id )|| {}
    res.send(phone)
})

app.listen(port, ()=>{
    console.log(`My task manager server running on port: ${port}`);
})
