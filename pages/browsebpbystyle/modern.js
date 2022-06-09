import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function modern() {
  return (
    <div style={{ display: "flex", gap: 30 }}>
      <div>
        <Link href="/browsebpbystyle" passHref>
          <Button>
            <ArrowBackIcon /> GO BACK
          </Button>
        </Link>
      </div>
      <div>
        <h3> Modern </h3>
      </div>
    </div>
  );
}