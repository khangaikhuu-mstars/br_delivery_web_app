import React from "react";
import PageInsideMenu from "./PageInsideMenu";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Dummy from "./Dummy";

function Menu() {
  return (
    <div>
      <PageInsideMenu />
      <Switch>
        <Route exact path="/menu" component={Dummy} />
        <Route path="/menu/salad" component={Dummy} />
        <Route path="/menu/snack" component={Dummy} />
        <Route path="/menu/sale" component={Dummy} />
      </Switch>
    </div>
  );
}

export default Menu;
