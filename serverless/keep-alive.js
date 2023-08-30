import axios from "axios";

async function keepAlive() {
  try {
    await axios.get(
      "https://qszbdfknevfygfstychp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
    );
    console.log("Successfully ping to Supabase.");
  } catch (error) {
    console.error("Failed to reach Supabase:", error.message);
  }
}

setInterval(keepAlive, 5000);
