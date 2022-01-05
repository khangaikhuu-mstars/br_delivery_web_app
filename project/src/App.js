import React from "react";
import "./App.css";
import HeaderMenu from './components/navbar'
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";
import Search from "./components/Search";
import User from "./components/User";
import Market from "./components/Market";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/search" component={Search} />
        <Route path="/user" component={User} />
        <Route path="/market" component={Market} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
