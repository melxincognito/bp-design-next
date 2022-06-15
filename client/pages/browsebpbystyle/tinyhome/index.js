import React, { useState, useEffect } from "react";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import Axios from "axios";

export default function tinyhome() {
  const [tinyhomeBlueprints, setTinyhomeBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_tinyhome").then((response) => {
      setTinyhomeBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName="Tiny Home">
      {tinyhomeBlueprints.map((blueprint, index) => (
        <>
          <BlueprintCard
            key={index}
            image={blueprint.image}
            planNumber={blueprint.plan_number}
            beds={blueprint.beds}
            baths={blueprint.baths}
            sqFt={blueprint.sq_ft}
            stories={blueprint.stories}
            slug="browsebpbystyle"
            style={blueprint.style}
          />
        </>
      ))}
    </BrowseStylesLayout>
  );
}
