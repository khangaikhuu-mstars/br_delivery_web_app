import React from "react";
import "./App.css";
import HeaderMenu from "./components/navbar/navbar";
import InfoPanel from "./components/InfoPanel";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderMenu />
      <Slider/>
      <InfoPanel/>
      <Footer />
    </div>
  );

}

export default App;
