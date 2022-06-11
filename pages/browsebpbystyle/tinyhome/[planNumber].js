import React from "react";
import { useRouter } from "next/router";
import BlueprintItemPageLayout from "../../../components/blueprintPages/BlueprintItemPageLayout";

export default function TinyHomePlanDetails() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

  return <BlueprintItemPageLayout planNumber={planNumber} style="Tiny Home" />;
}
