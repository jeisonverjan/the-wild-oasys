import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qszbdfknevfygfstychp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzemJkZmtuZXZmeWdmc3R5Y2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1NzcwOTgsImV4cCI6MjAwNjE1MzA5OH0.JfuuH2-yB-ydKCfa8qbuo3Oszdk0e0Fv36ka0Qa2SEQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
