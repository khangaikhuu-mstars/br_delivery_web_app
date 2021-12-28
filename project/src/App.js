import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import TextField from "./components/TextField";

function App() {
  return(
    <div className="d-flex flex-column">
      <Slider />
      
      <TextField name={'email'} />
      <TextField name={'password'} />
      <TextField name={'password'} />
      <TextField name={'name'} />
      <TextField name={'number'} />

    </div>
  ) 
}

export default App;
