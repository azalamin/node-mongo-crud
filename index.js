const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;

// use middleware
app.use(cors());
app.use(express.json());

// user:  dbuser1
// password:  l9pN5HhzgzvcP8P3

const uri =
  "mongodb+srv://dbuser1:l9pN5HhzgzvcP8P3@cluster0.oxgvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const UserCollection = client.db("foodExpress").collection("user");

    // get user
    app.get('/user', async (req, res) => {
        const query = {};
        const cursor = UserCollection.find(query);
        const users =  await cursor.toArray();
        res.send(users)
    })

    // update user
    app.put('/user/:id', async (req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;
        const filter = {_id: ObjectId(id)};
        const options = { upsert: true };
        const updatedDoc = {
            $set: {
                name: updatedUser.name,
                email: updatedUser.email
            }
        };
        const result = await UserCollection.updateOne(filter, updatedDoc, options);
        res.send(result)
    })

    // POST user: add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await UserCollection.insertOne(newUser);
      res.send(result);
    });

    // update user
    app.get('/user/:id', async (req, res) => {
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await UserCollection.findOne(query);
        res.send(result)
    })

    // delete user
    app.delete('/user/:id', async(req, res ) => {
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await UserCollection.deleteOne(query);
        res.send(result)
    })

  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("I am doing node for backend and learning node js");
});

app.listen(port, () => {
  console.log("Listening to", port);
});
