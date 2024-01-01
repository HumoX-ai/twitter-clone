import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "Twitter-clone",
      autoCreate: true,
    };
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("MongoDB connected");
    
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
