import React from "react";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

const Treats = () => {
  const [fetchError, setFetchError] = useState(null);
  const [treats, setTreats] = useState(null);

  useEffect(() => {
    const fetchTreats = async () => {
      const { data, error } = await supabase.from("seinfeldfoods").select(`
        food_name,
        episode,
        episode_name
      `);

      if (error) {
        setFetchError("Could not get Treats");
        setTreats(null);
        console.log(error);
      }
      if (data) {
        setTreats(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchTreats();
  }, []);

  return (
    <div>
      <h1 className="treats-header">Treats</h1>
      {fetchError && <p>{fetchError}</p>}
      {treats && (
        <div className="treats">
          {treats.map((treats) => (
            <p>{treats.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Treats;
