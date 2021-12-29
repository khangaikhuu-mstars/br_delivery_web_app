import React from "react";
import InfoPanel from './components/InfoPanel';
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  return (
    <div>
      <Slider/>
      <InfoPanel/>
      <Footer />
    </div>
  );

}

export default App;
