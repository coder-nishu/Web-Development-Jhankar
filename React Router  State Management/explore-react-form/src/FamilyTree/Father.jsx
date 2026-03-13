import React from "react";
import Me from "./Me";
import Sister from "./Sister";
import Brother from "./Brother";

export default function Father({asset_1}) {
  return (
    <div className="border">
      <h3>Father</h3>
      <div className="flex">
        <Me asset_1={asset_1} />
        <Brother />
        <Sister />
      </div>
    </div>
  );
}
