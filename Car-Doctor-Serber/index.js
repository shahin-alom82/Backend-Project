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
        const carDoctorService = client.db("carDoctorNew").collection("service")
        const carDoctorBookings = client.db("carDoctorNew").collection("bookings")

        app.get("/service", async (req, res) => {
            const result = await carDoctorService.find().toArray()
            res.send(result)
        })

        app.get("/service/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            const options = {
                projection: { title: 1, price: 1, service_id: 1, img: 1 }
            }
            const result = await carDoctorService.findOne(query, options)
            res.send(result)
        });



        // Bookings

        app.post("/bookings", async (req, res) => {
            const bookings = req.body;
            const result = await carDoctorBookings.insertOne(bookings);
            res.send(result)

        })

        app.get("/bookings", async (req, res) => {
            console.log(req.query.email);
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await carDoctorBookings.find(query).toArray()
            res.send(result);
        })

        app.delete("/bookings/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await carDoctorBookings.deleteOne(query)
            res.send(result)
        })

        // Update er Kaj
        app.patch('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const bookingConfirm = req.body;
            console.log(bookingConfirm)

            const updateDoc = {
                $set: {
                    status: bookingConfirm.status
                }
            }
            const result = await carDoctorBookings.updateOne(filter, updateDoc)
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
    res.send('Car Doctor is Running')
})

app.listen(port, () => {
    console.log(`Car Doctor is Running, ${port}`)
})