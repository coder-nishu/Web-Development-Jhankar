import React, { useContext } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunt from "./Aunt";
import "./familytree.css";
import { MoneyContext } from "./FamilyTree";
export default function Grandpa({asset_1}) {
    const [money,setMoney] = useContext(MoneyContext)
  return (
    <div className="border">
      <h3>Grandpa</h3>
      <button onClick={() => setMoney(0)}>Reset Total Asset</button> <br />
      <div className="flex">
        <Father asset_1={asset_1}/>
        <Uncle />
        <Aunt />
      </div>
    </div>
  );
}
