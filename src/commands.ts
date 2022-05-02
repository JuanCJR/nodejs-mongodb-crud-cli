import { program } from "commander";
import { prompt } from "inquirer";

import {
  addTask,
  findTask,
  listTask,
  removeTask,
  updateTask,
} from "./controllers/tasks.controller";
program.version("0.0.1").description("A command line tool for managing tasks");
const taskQuestions = [
  { type: "input", message: "Task title", name: "title" },
  { type: "input", message: "Task description", name: "description" },
];

program
  .command("save")
  .alias("s")
  .action(async () => {
    const answers = await prompt(taskQuestions);
    addTask(answers);
  });

program
  .command("list")
  .alias("l")
  .action(async () => {
    await listTask();
  });

program
  .command("delete <id>")
  .alias("d")
  .action(async (_id) => {
    await removeTask(_id);
  });

program
  .command("update <id>")
  .alias("u")
  .action(async (_id) => {
    const answers = await prompt(taskQuestions);
    await updateTask(_id, answers);
  });

program
  .command("find <task>")
  .alias("f")
  .action(async (text) => {
    await findTask(text);
  });
program.parse(process.argv);
