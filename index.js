const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const port = process.env.PORT || 5000;

const app = express();

// use middleware
app.use(cors());
app.use(express.json());

// mongodb database connection string

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dwvav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        await client.connect();

        const serviceCollection = client.db('GeniusDatabase').collection('service');

        // get multiple documents
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();

            res.send(services);
        });

        // get a document
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;

            const query = {_id: ObjectId(id)};

            const service = await serviceCollection.findOne(query);

            res.send(service);
        })

        // post a document
        app.post('/service', async (req, res) => {
            const newService = req.body;

            const result = await serviceCollection.insertOne(newService);

            res.send(result);
        });

        // delete
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id;

            const query = {_id: ObjectId(id)};

            const result = await serviceCollection.deleteOne(query);

            res.send(result);
        })

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('geniu car repair server is running')
})

app.listen(port, () => {
    console.log('Listening to the port', port);
})