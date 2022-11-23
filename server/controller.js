require("dotenv");
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  getInfo: (req, res) => {
    supabase
      .from("seinfeldfoods")
      .select(
        `
    food_id,
    food_name,
    episode,
    episode_name,
    characters,
    location,
    address,
    image_url
  `
      )

      .then((dbRes) => {
        res.status(200).send(dbRes.data);
      })
      .catch((err) => console.log(err));
  },
};
