import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import TextInput from "./components/TextInput";

function App() {
  return(
    <div className="d-flex flex-column">
      <Slider />
      
      <div className="inputContainer">
        <TextInput name={'email'} type={''}/>
        <TextInput name={'password'} type={'password'}/>
        <TextInput name={'password'} type={'password'}/>
        <TextInput name={'name'} />
        <TextInput name={'number'}/>
      </div>

    </div>
  );
}

export default App;
