import React from "react";
import { useRouter } from "next/router";
import BlueprintItemPageLayout from "../../../components/blueprintPages/BlueprintItemPageLayout";

export default function CabinPlanDetails() {
  const router = useRouter();
  const planNumber = router.query.planNumber;
  const description = router.query.description;

  return (
    <BlueprintItemPageLayout
      planNumber={planNumber}
      description={description}
      style="Cabin"
    />
  );
}
