import React, { useState, useEffect } from "react";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import Axios from "axios";

export default function spanishcolonial() {
  const [spanishBlueprints, setSpanishBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_spanish").then((response) => {
      setSpanishBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName="Spanish">
      {spanishBlueprints.map((blueprint, index) => (
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
