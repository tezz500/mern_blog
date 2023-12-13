const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDatabase = () => {
    const dbServer = process.env.APP_SERVER;
    if(dbServer=="SERVER"){
        connectToLive();
        return;
    }
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(conn=>{
        console.log(`Mangodb connected with  ${conn.connection.host}`);
    });
}


const connectToLive = async ()=>{
    const client = new MongoClient(process.env.DB_LIVE_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}

module.exports = connectDatabase;