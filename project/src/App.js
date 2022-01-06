import React, { ModalContext } from "react";
import "./App.css";
import HeaderMenu from './components/navbar'
import Home from "./components/Home";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";
import Search from "./components/Search";
import User from "./components/User";
import Market from "./components/Market";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import PageInsideMenu from "./components/PageInsideMenu";
import TermOfUse from "./components/TermOfUse"
import Privacy from './components/Privacy'

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
        <Route path="/termofuse" component={TermOfUse}/>
        <Route path="/privacy" component={Privacy}/>
        <Route component={NotFound}/>

        <Route path="/pageInsideMenu" component={PageInsideMenu} />

      </Switch>
      {/* <TermOfUse/> */}
      <Footer />
     

    </BrowserRouter>
  );
}

export default App;
