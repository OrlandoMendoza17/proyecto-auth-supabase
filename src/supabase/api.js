import { createClient } from "@supabase/supabase-js";
import config from "../config";

const { SUPABASE_KEY, SUPABASE_URL } = config

const supabase = createClient(
  SUPABASE_URL, SUPABASE_KEY
)

export default supabase