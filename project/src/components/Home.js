import React from "react";
// import "./App.css";
import HeaderMenu from './navbar'
import InfoPanel from "./InfoPanel";
import Footer from "./Footer";
import Slider from "./Slider";
import "../../src/App.css"

function Home() {
    return (
        <div>
            <Slider />
            <InfoPanel />
        </div>
    );

}

export default Home;
