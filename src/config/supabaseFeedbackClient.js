import { createClient } from "@supabase/supabase-js";

const supabaseUrlFeedback = process.env.REACT_APP_SUPABASE_FEEDBACK_URL;
const supabaseKeyFeedback = process.env.REACT_APP_SUPABASE_ANON_KEY_FEEDBACK;

const supabaseFeedback = createClient(supabaseUrlFeedback, supabaseKeyFeedback);

export default supabaseFeedback;
