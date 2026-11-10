import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export type Reservation = {
  id: string;
  date: string;
  time: string;
  guests: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;

};

const dataDirectory = path.join(process.cwd(), "data");
const filePath = path.join(dataDirectory, "reservations.json");


// Get all reservations
export async function getReservations(): Promise<Reservation[]> {
  try {
    // Ensure the data directory exists
    await mkdir(dataDirectory, { recursive: true });
    const file = await readFile(filePath, "utf8");
    return JSON.parse(file) as Reservation[];
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await mkdir(dataDirectory, { recursive: true });
      await writeFile(filePath, "[]", "utf8");
      return [];
    }

    throw error;
  }
}
// Save reservations
export async function saveReservations(
  reservations: Reservation[]
) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(
    filePath,
    JSON.stringify(reservations),
    "utf8"
  );
}