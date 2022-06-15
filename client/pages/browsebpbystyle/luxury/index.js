import React, { useState, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";

export default function luxury() {
  const [luxuryBlueprints, setLuxuryBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_luxury").then((response) => {
      setLuxuryBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName="Luxury">
      {luxuryBlueprints.map((blueprint, index) => (
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
