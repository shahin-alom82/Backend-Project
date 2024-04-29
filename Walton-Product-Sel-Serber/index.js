const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(express.json())



// Mongodb Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sozmemk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
        const waltonProductCollection = client.db("waltonDB").collection("product")
        const waltonProductAddCollection = client.db("waltonDB").collection("addProduct")



        app.get("/product", async (req, res) => {
            const i = waltonProductCollection.find()
            const result = await i.toArray()
            res.send(result)
        })

        // Add Product er kaj Start
        app.post("/addProduct", async (req, res) => {
            const addProduct = req.body
            const result = await waltonProductAddCollection.insertOne(addProduct)
            res.send(result)
        })


        app.get("/addProduct", async (req, res) => {
            const i = waltonProductAddCollection.find()
            const result = await i.toArray()
            res.send(result)
        })

        // Delete er Kaj
        app.delete("/addProduct/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await waltonProductAddCollection.deleteOne(query)
            res.send(result)
        })

        // Update er kaj Start
        app.get("/addProduct/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await waltonProductAddCollection.findOne(query)
            res.send(result)
        })

        app.put("/addProduct/:id", async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true }
            const updateUser = {
                $set: {
                    name: user.name,
                    url: user.url,
                    brand: user.brand,
                    price: user.price
                }
            }
            const result = await waltonProductAddCollection.updateOne(filter, updateUser, option )
            res.send(result)

        })

        // Update er kaj End

        // Add Product er kaj End



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);
// Mongodb Connection End




app.get('/', (req, res) => {
    res.send('Walton Product is Running')
})

app.listen(port, () => {
    console.log(`Walton Product is Running, ${port}`)
})