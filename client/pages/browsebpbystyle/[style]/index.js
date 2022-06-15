import React from "react";
import { useRouter } from "next/router";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";

export default function index() {
  const router = useRouter();
  const style = router.query.style;
  const [blueprints, setBlueprints] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/get_${style}`).then((response) => {
      setBlueprints(response.data);
    });
  }, []);

  return (
    <BrowseStylesLayout StyleName={style}>
      {blueprints.map((blueprint, index) => (
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
