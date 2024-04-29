import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully.");
    });

    connection.on("error", (error) => {
      console.log("mongoDb connection failed" + error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong with the database connection.");
    console.log(error);
  }
}
