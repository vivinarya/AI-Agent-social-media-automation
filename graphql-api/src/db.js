const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URL; 
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
}

module.exports = { client, connectDB };
