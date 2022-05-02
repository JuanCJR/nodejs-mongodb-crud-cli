#!/usr/bin/env node
//called shebang and is used to tell the Linux OS which interpreter to use to parse the rest of the file
import "./commands";
import { connectDB } from "./database";

async function main() {
  await connectDB();
}

main();
