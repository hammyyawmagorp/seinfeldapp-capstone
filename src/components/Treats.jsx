import React from "react";
import supabaseCards from "../config/supabaseCardsClient";
import { useEffect, useState } from "react";
import TreatsCard from "./TreatsCard";

const Treats = () => {
  const [fetchError, setFetchError] = useState(null);
  const [treats, setTreats] = useState(null);
  // const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchTreats = async () => {
      const { data, error } = await supabaseCards.from("seinfeldfoods").select(`
        food_name,
        episode,
        episode_name,
        characters,
        location,
        address,
        image_url
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
      <div className="search"></div>

      {fetchError && <p>{fetchError}</p>}
      {treats && (
        <div className="treats">
          <div className="treat-grid">
            {treats.map((treat) => (
              <>
                <TreatsCard key={treat.id} treat={treat} />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Treats;
