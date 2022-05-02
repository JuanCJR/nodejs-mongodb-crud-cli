import './commands';
import { connectDB } from "./database";

async function main() {
  await connectDB();
}

main();
