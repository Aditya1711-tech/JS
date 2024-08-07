import mongoose, { ConnectionStates } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});

    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected successfully");
  } catch (error) {
    console.log(error);
    console.log("DB Connection failed");
    process.exit(1);
  }
}

export default dbConnect;
