import { connect, connection } from "mongoose";
import { MONGODB_URI } from "./config";

const connectDB = async () => {
  await connect(MONGODB_URI);
  connection.on("error", (err) => console.log(err));
};

export { connectDB, connection };
