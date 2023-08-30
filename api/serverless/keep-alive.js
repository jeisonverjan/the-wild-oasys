import { deleteBookings } from "../../src/data/uploader.js";
import { deleteGuests } from "../../src/data/uploader.js";
import { deleteCabins } from "../../src/data/uploader.js";
import { createGuests } from "../../src/data/uploader.js";
import { createCabins } from "../../src/data/uploader.js";
import { createBookings } from "../../src/data/uploader.js";

export default async function keepAlive() {
  console.log("serverless function executed");
  try {
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();
    console.log("Data successfully deleted");

    // Bookings need to be created LAST
    await createGuests();
    await createCabins();
    await createBookings();
    console.log("Data successfully created");
  } catch (error) {
    console.log("Error while updating the bookings", error);
  }
}
