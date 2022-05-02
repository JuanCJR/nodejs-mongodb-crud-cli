import { connect } from "mongoose";

export const connectDB = async () => {
  await connect("mongodb://localhost/taskcli");
};
