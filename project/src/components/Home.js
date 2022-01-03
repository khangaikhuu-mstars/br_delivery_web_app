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

            <div className="d-flex flex-column">
                <Slider />

                <div className="inputContainer">
                    <TextInput name={'email'} type={'email'} />
                    <TextInput name={'password'} type={'password'} />
                    {/* <TextInput name={'password'} type={'password'}/>
        <TextInput name={'name'} /> */}
                    <TextInput name={'number'} type={'number'} />
                    <TextInput name={'textField'} type={'textField'} />
                </div>

            </div>

        </div>
    );

}

export default Home;
