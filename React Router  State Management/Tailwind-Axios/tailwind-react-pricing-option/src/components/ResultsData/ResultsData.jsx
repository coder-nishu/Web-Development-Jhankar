import { Line, LineChart } from "recharts";
import {use} from "react";
import React from "react";
import axios from "axios";
const resultsPromise = axios.get('resultsData.json')
export default function ResultsData() {
  const data = use(resultsPromise).data;
  return (
    <div>
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={data}
      >
        <Line dataKey="math"  stroke="red"/>
        <Line dataKey="chem" stroke="blue"/>
        <Line dataKey="physics" stroke="green"/>
      </LineChart>
    </div>
  );
}
