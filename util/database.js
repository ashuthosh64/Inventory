const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = async (callback) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected 🚀");
    _db = client.db("shop");
    callback();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getDb = () => {
  if (!_db) throw new Error("Database not initialized");
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;