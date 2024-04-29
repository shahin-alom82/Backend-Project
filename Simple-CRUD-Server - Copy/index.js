const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(express.json())


// Mongodb Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://simpleCrudOperation:zi0fcT2FmPQGa9ZQ@cluster0.sozmemk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);
// Mongodb Connection End




app.get('/', (req, res) => {
    res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () => {
    console.log(`SIMPLE CRUD IS RUNNIGN ON PORT, ${port}`)
})