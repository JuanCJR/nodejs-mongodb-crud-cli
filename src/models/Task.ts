import { Schema, model } from "mongoose";
import { Task } from "../interfaces/tasks.interface";

const taskSchema = new Schema<Task>(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
