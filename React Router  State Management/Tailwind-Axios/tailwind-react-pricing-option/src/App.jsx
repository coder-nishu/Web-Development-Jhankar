import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import ResultsData from "./components/ResultsData/ResultsData";
const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
          <PricingPlan pricingPromise={pricingPromise}></PricingPlan>
        </Suspense>
      </main>
      <ResultsData/>
    </>
  );
}

export default App;
