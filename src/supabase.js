import { createClient } from "@supabase/supabase-js";
import {
  REACT_APP_VITE_SUPABASE_URL,
  REACT_APP_VITE_SUPABASE_ANON_KEY,
} from "./config";

const supabase_url = REACT_APP_VITE_SUPABASE_URL;
console.log("supabase_url", supabase_url);
const supabase_key = REACT_APP_VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabase_url, supabase_key, {});
