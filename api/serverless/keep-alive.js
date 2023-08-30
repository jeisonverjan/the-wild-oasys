import { deleteBookings } from "../../src/data/Uploader.jsx";
import { createBookings } from "../../src/data/Uploader.jsx";

export default async function keepAlive() {
  console.log("serverless function executed");
  try {
    await deleteBookings();
    console.log("Bookings successfully deleted");
    await createBookings();
    console.log("Bookings successfully updated");
  } catch (error) {
    console.log("Error while updating the bookings", error);
  }
}
