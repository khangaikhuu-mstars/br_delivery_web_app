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
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import PageInsideMenu from "./components/PageInsideMenu";
import TermOfUse from "./components/TermOfUse";
import Privacy from './components/Privacy';
import OrderHistory from './components/OrderHistory';

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
<<<<<<< HEAD
        <Route path="/termofuse" component={TermOfUse} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/orderhistory" component={OrderHistory} />
        <Route component={NotFound} />
=======
        <Route path="/termofuse" component={TermOfUse}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> 
        <Route path="/pageInsideMenu" component={PageInsideMenu} />
        <Route component={NotFound}/>


>>>>>>> cb6c686929464400f54d2a1997d9fc45cf37cb45
      </Switch>
      <Footer />


    </BrowserRouter>
  );
}

export default App;
