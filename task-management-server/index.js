
const express  = require("express")
const cors = require('cors');
const jwt = require("jsonwebtoken");
require('dotenv').config()
const tasklist = require('./tasklist.json');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000

// middleware

app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.di78vms.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
   
      await client.connect();
   

    const tasksCollection = client.db("TaskyyLab").collection("tasks")
    const usersCollection = client.db("TaskyyLab").collection("users")


  // jwt api
  app.post("/jwt", async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  });
// user apis
// user related apis

app.post("/api/v1/users", async (req, res) => {
    const user = req.body;
    const query = { email: user.email };
    const existingUser = await usersCollection.findOne(query);
    if (existingUser) {
      return res.send({ message: "user already exist", insertedId: null });
    }
    const result = await usersCollection.insertOne(user);
    res.send(result);
  });
  app.get("/api/v1/users", async (req, res) => {
    const email = req.query.email;
    let query = {};
    if (email) {
      query = { email: email };
    }
    const result = await usersCollection.find(query).toArray();
    res.send(result);
  });

app.get("/api/v1/tasks", async (req, res) => {
    const email = req.query.email;
    let query = {};
    if (email) {
      query = { email: email };
    }
    const result = await tasksCollection.find(query).toArray();
    res.send(result);
  });





      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

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
