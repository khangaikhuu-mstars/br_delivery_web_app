import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "../css/pageInsideMenu.css";
import "../components/Dummy";

const PageInsideMenu = () => {
  return (
    <div className="slidingButtons" id="slidingButtons">
      <a href="" className="button button-active">
        Үндсэн хоол
      </a>
      <a href="" className="button">
        Салад ба зууш
      </a>
      <a href="" className="button">
        Амттан
      </a>
      <a href="" className="button">
        Хямдралтай
      </a>
      <NavLink className="button" to="/dummy">
        Үндсэн хоол
      </NavLink>
      <NavLink className="button" to="/dummy">
        Салад ба зууш
      </NavLink>
      <NavLink className="button" to="/dummy">
        Амттан
      </NavLink>
      <NavLink className="button" to="/dummy">
        Хямдралтай
      </NavLink>
    </div>
  );
};

export default PageInsideMenu;
