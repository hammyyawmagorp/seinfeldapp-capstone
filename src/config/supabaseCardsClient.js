import { createClient } from "@supabase/supabase-js";

const supabaseUrlCards = process.env.REACT_APP_SUPABASE_CARDS_URL;
const supabaseKeyCards = process.env.REACT_APP_SUPABASE_ANON_KEY_CARDS;

const supabaseCards = createClient(supabaseUrlCards, supabaseKeyCards);

export default supabaseCards;
