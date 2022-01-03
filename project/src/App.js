import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import TextInput from "./components/TextInput";

function App() {
  return(
    <div className="d-flex flex-column">
      <Slider />
      
      <div className="inputContainer">
        <TextInput name={'email'} />
        <TextInput name={'password'} />
        <TextInput name={'password'} />
        <TextInput name={'name'} />
        <TextInput name={'number'} />
      </div>

    </div>
  );
}

export default App;
