import React from "react";
import { useRouter } from "next/router";

export default function PlanDeets() {
  const router = useRouter();

  const planNumber = router.query.plannumber;

  return (
    <div>
      <h1> {planNumber} </h1>
    </div>
  );
}
