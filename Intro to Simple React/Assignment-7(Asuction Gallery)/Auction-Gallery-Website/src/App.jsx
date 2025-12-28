import "./App.css";
import Banner from "./banner/Banner";
import ActiveAuction from "./body/ActiveAuction";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="sora-text-style">
      <Navbar />
      <Banner />
      <ActiveAuction />
      <Footer />
    </div>
  );
}

export default App;
