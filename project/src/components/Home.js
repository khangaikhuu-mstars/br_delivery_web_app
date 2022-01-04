import React from "react";
// import "./App.css";
import InfoPanel from "./InfoPanel";
import Slider from "./Slider";
import "../../src/App.css"
import Cards from "./Cards"

function Home() {
    return (
        <div>
            <Slider />
            <InfoPanel />
            <Cards/>
        </div>
    );

}

export default Home;
