import React, { useState, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";

export default function modern() {
  const [modernBlueprints, setModernBlueprints] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get_modern").then((response) => {
      setModernBlueprints(response.data);
    });
  }, []);
  return (
    <BrowseStylesLayout StyleName="Modern">
      {modernBlueprints.map((blueprint, index) => (
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
