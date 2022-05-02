import { Task } from "../interfaces/tasks.interface";
import TaskModel from "../models/Task";
import { connection } from "../database";

export const addTask = async (task: Task) => {
  await TaskModel.create(task);
  console.log("New task created");
  await connection.close();
  process.exit(0);
};

export const listTask = async () => {
  const tasks = await TaskModel.find().lean();
  console.table(
    tasks.map((task) => ({
      _id: String(task._id),
      title: task.title,
      description: task.description,
    }))
  );
  await connection.close();
  process.exit(0);
};

export const removeTask = async (_id: string) => {
  await TaskModel.findByIdAndDelete(_id);
  console.log("Task Deleted");
  await connection.close();
  process.exit(0);
};

export const updateTask = async (_id: string, task: Task) => {
  await TaskModel.findByIdAndUpdate(_id, task);
  console.log("Task Updated");
  await connection.close();
  process.exit(0);
};

export const findTask = async (text: string) => {
  const search = new RegExp(text, "i");
  const tasks = await TaskModel.find({
    $or: [{ title: search }, { description: search }],
  });

  if (!tasks.length) {
    console.log("No tasks found");
  } else {
    console.table(
      tasks.map((task) => ({
        _id: String(task._id),
        title: task.title,
        description: task.description,
      }))
    );
  }

  await connection.close();
  process.exit(0);
};
