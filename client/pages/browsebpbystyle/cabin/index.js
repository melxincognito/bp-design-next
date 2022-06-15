import React, { useState, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";

export default function cabin() {
  const [cabinBlueprints, setCabinBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_cabin").then((response) => {
      setCabinBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName="Cabin">
      <button
        onClick={() => {
          console.log(cabinBlueprints);
        }}
      >
        {" "}
        log me{" "}
      </button>
      {cabinBlueprints.map((blueprint, index) => (
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
