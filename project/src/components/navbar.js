import React, { useState } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menu;
  if (showMenu) {
    menu = <div className="dropMenu">
      <div className="dropMenuSection">
        <div id="dropMenuBorder">
          <NavLink onClick={() => {
            setShowMenu(!showMenu)
          }}
            className="dropMenuContent dropMenuText"
            to="/menu">
            <div className="dropMenuMinSection">
              <div className="dropMenuImg">
                <img src="/icons/forkandknife.svg" alt="" />
              </div >
              <div >Хоолны цэс</div>
            </div >
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </NavLink>
        </div >
        <NavLink className="dropMenuText dropMenuContent" onClick={() => {
          setShowMenu(false)
        }} to="/delivery">
          <div className="dropMenuMinSection">

            <div className="dropMenuImg">
              <img src="/icons/map.svg" alt="" />
            </div>
            <div>
              Хүргэлтийн бүс
            </div>
          </div>
          <img className="seeMore" src="/icons/seemore.svg" alt="#" />
        </NavLink>
      </div >
      <div className="dropMenuSection">
        <div id="dropMenuBorder">
          <NavLink onClick={() => {
            setShowMenu(!showMenu)
          }}
            className="dropMenuContent dropMenuText"
            to="/asdasdasd">
            <div className="dropMenuMinSection" >
              <div className="dropMenuImg">
                <img src="/icons/rounduser.svg" alt="" />
              </div>
              <div>Хэрэглэгчийн мэдээлэл</div>
            </div>
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </NavLink>
        </div>

        <NavLink className="dropMenuText dropMenuContent" onClick={() => {
          setShowMenu(!showMenu)
        }} to="/uahgbiebrg">
          <div className="dropMenuMinSection">
            <div className="dropMenuImg">
              <img src="/icons/market.svg" alt="" />
            </div>
            <a className="dropMenuText" >Миний захиалга</a>
          </div>
          <img className="seeMore" src="/icons/seemore.svg" alt="#" />
        </NavLink>
      </div>
    </div >
  }

  return (
    <nav>
      <header className="container">
        <div className="headerMenu">
          <FontAwesomeIcon
            className='toggleButton'
            icon={showMenu ? faChevronLeft : faBars}
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          />
          <div className="logo">
            <NavLink className="logoItems" onClick={() => {
              setShowMenu(false)

            }} exact to="/">
              <img className="logoImg" src='/img/img.png' />
              <a className="logoText" >Food Delivery</a>
            </NavLink>
          </div>

          <ul className="menu" id="basic-navbar-nav">
            <li ><NavLink className="menuText"
              activeClassName='activeMenuItem' exact to="/">НҮҮР</NavLink></li>
            <li ><NavLink className='menuText' activeClassName='activeMenuItem' to="/menu">ХООЛНЫ ЦЭС</NavLink></li>
            <li ><NavLink className='menuText' activeClassName='activeMenuItem' to="/delivery">ХҮРГЭЛТИЙН БҮС</NavLink></li>
          </ul>
          <div className="icons">
            <input className="searchBox" type="text" placeholder="&#128269; Хайх" />
            <img className="searchIcon" src="/icons/searchicon.svg" />
            <img className="mobileUser" src='/icons/mobileuser.svg' />
            <ul className="userBusket">
              <li className="userBusketList">
                <div className="userBusketElement">
                  <img src='/icons/busketicon.svg' />
                  <a href="">Сагс</a>
                </div>
              </li>
              <li className="userBusketList">
                <div className="userBusketElement">
                  <img src="/icons/usericon.svg" />
                  <a href="">Нэвтрэх</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {menu}
    </nav >
  )
}
export default HeaderMenu;
