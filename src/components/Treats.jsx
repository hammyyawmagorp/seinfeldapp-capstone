import React from "react";
import App from "../App";
import axios from "axios";
import { useEffect, useState } from "react";
import TreatsCard from "./TreatsCard";

const Treats = () => {
  const [fetchError, setFetchError] = useState(null);
  const [treats, setTreats] = useState(null);
  // const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchTreats = async () => {
      const response = await axios.get(`http://localhost:5050/info`);
      setTreats(response.data);
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
