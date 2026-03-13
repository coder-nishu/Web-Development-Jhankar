import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familytree.css";
export const AssetContext = createContext("");
export const MoneyContext = createContext(0);
export default function FamilyTree() {
  const asset_1 = "diamond";
  const asset_2 = "gold"; //send in context api using value through provider
  const [money,setMoney] = useState(0)
  return (
    <div>
      <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={asset_2}>
          <h1>Family Tree</h1>
          <h4>Total family assset = {money}</h4>
          <Grandpa asset_1={asset_1} />
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
}
/* 
1. create 
*/
