import React from "react";
import InfoPanel from './components/InfoPanel';
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Cards from "./components/Cards"
import "./App.css";

function App() {
  return (
    <div>
      <Slider/>
      <InfoPanel/>
      <Cards/>
      <Footer />
    </div>
  );

}

export default App;
