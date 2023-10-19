import mongodb from "mongodb";

const { MongoClient } = mongodb;

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString, { useUnifiedTopology: true });
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("sample_training");

export default db;
