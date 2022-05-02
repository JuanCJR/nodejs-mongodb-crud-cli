import { Schema, model } from "mongoose";

interface Task {
  title: string;
  description: string;
}

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

export default model('Task', taskSchema);