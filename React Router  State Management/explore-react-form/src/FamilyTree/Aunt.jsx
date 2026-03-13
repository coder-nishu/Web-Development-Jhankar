import React from "react";
import Cousin from "./Cousin";
export default function Aunt() {
  return (
    <div className="border">
      <h3>Aunt</h3>
      <div className="flex">
        <Cousin name={"salman"} />
        <Cousin name={"sumona"} />
      </div>
    </div>
  );
}
