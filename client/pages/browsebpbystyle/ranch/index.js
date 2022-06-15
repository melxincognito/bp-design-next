import React, { useState, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";

export default function ranch() {
  const [ranchBlueprints, setRanchBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_ranch").then((response) => {
      setRanchBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName="Ranch">
      {ranchBlueprints.map((blueprint, index) => (
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
