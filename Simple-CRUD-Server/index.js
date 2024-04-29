const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(express.json())


// Mongodb Connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        const usersCollection = client.db("userDB").collection("users")

        app.get("/users", async (req, res) => {
            const i = usersCollection.find()
            const result = await i.toArray()
            res.send(result)
        })


        // update er kaj
        app.get("/users/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const user = await usersCollection.findOne(query)
            res.send(user)
        })

        // update er kaj
        app.put("/users/:id", async (req, res) => {
            const id = req.params.id;
            const user = req.body
            console.log(id, user)
            const filter = { _id: new ObjectId(id) }
            const option = { upsert: true }
            const updateUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const result = await usersCollection.updateOne(filter, updateUser, option)
            res.send(result)

        })


        app.post("/users", async (req, res) => {
            const user = req.body;
            console.log("User addedet Successfuly", user)
            const result = await usersCollection.insertOne(user)
            res.send(result)
        })


        app.delete("/users/:id", async (req, res) => {
            const id = req.params.id;
            console.log("Please Deleted Count", id)
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query)
            console.log(result)
            res.send(result)
        })


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




