import React from 'react'
import './navbar.css'
import { } from 'react-bootstrap'
const HeaderMenu = () => {

    return (
        <header className="container">
            <div className="headerMenu">
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div className="logo">
                    <img className="logoImg" src='/images/img.png' />
                    <a className="logoText" href="#">Food Delivery</a>
                </div>
                <ul className="menu" id="basic-navbar-nav">
                    <li className="activeMenuItem">НҮҮР</li>
                    <li>ХООЛНЫ ЦЭС</li>
                    <li>ХҮРГЭЛТИЙН БҮС</li>
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
    )
}
export default HeaderMenu;