import React, { useState } from 'react'
import './navbar.css'
const HeaderMenu = () => {
    const searchInput = <input className="searchBox" type="text" placeholder="&#128269; Хайх" />
    const searcIcon = <img className="searchIcon" src="/icons/searchicon.svg" />
    // const width = window.innerWidth;
    // console.log(width)
    // const isTable = width > 1440 ? searchInput : searcIcon

    const [width, setWidth] = useState(
        window.pageXOffset > 1440 ? searchInput : searcIcon
    );

    return (
        <header className="container">
            <div className="headerMenu ">
                <div className="logo">
                    <img className="logoImg" src='/images/img.png' />
                    <a className="logoText" href="#">Food Delivery</a>
                </div>
                <ul className="menu">
                    <li className="activeMenuItem">НҮҮР</li>
                    <li>ХООЛНЫ ЦЭС</li>
                    <li>ХҮРГЭЛТИЙН БҮС</li>
                </ul>
                <div>{width}</div>
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
        </header>
    )
}
export default HeaderMenu;