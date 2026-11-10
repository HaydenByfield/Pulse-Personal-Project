
// readFile  = Reads information from a file.
// writeFile = Writes information to a file.
// mkdir = Creates a directory (folder).
import { readFile, writeFile, mkdir } from "fs/promises";
// Import path to help construct file paths correctly
import path from "path";

// This tells TypeScript what information every user must contain.
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passwordHash: string;
};
// process.cwd() gets the current working directory of your project.
//Creates a working path from project directory to users.json
const dataDirectory = path.join(process.cwd(), "data");
const filePath = path.join(dataDirectory, "users.json");

// Get all registered users
export async function getUsers(): Promise<User[]> {
  try {
    // Ensure the data directory exists
    // recursive: true also creates any missing parent directories.
    await mkdir(dataDirectory, { recursive: true });
    const file = await readFile(filePath, "utf8");
    return JSON.parse(file) as User[];
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await mkdir(dataDirectory, { recursive: true });
      await writeFile(filePath, "[]", "utf8");
      return [];
    }

    throw error;
  }
}

// Accept an array of User objects and save it to users.json
// Save users to JSON
// Promise<void> means this function doesn't return a value
export async function saveUsers(users: User[]): Promise<void> {
  await mkdir(dataDirectory, { recursive: true });

  await writeFile(
    filePath,
    JSON.stringify(users, null, 2),
    "utf8"
  );
}