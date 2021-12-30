import React, { useState } from 'react'
import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const HeaderMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    let menu;
    if (showMenu) {
        menu = <div className="dropMenu">
            <div className="dropMenuSection">
                <div className="dropMenuContent" id="dropMenuBorder">
                    <div className="dropMenuMinSection">
                        <div className="dropMenuImg">
                            <img src="/icons/forkandknife.svg" alt="" />
                        </div>
                        <a className="dropMenuText" href="#">Хоолны цэс</a>
                    </div>
                    <img className="seeMore" src="/icons/seemore.svg" alt="#" />
                </div>
                <div className="dropMenuContent">
                    <div className="dropMenuMinSection">
                        <div className="dropMenuImg">
                            <img src="/icons/forkandknife.svg" alt="" />
                        </div>
                        <a className="dropMenuText" href="#">Хоолны цэс</a>
                    </div>
                    <img className="seeMore" src="/icons/seemore.svg" alt="#" />
                </div>
            </div>
            <div className="dropMenuSection">
                <div className="dropMenuContent" id="dropMenuBorder">
                    <div className="dropMenuMinSection" >
                        <div className="dropMenuImg">
                            <img src="/icons/forkandknife.svg" alt="" />
                        </div>
                        <a className="dropMenuText" href="#">Хоолны цэс</a>
                    </div>
                    <img className="seeMore" src="/icons/seemore.svg" alt="#" />
                </div>
                <div className="dropMenuContent">
                    <div className="dropMenuMinSection">
                        <div className="dropMenuImg">
                            <img src="/icons/forkandknife.svg" alt="" />
                        </div>
                        <a className="dropMenuText" href="#">Хоолны цэс</a>
                    </div>
                    <img className="seeMore" src="/icons/seemore.svg" alt="#" />
                </div>
            </div>
        </div>
    }
    return (
        <nav>
            <header className="container">
                <div className="headerMenu">
                    <FontAwesomeIcon
                        className='toggleButton'
                        icon={faBars}
                        onClick={() => {
                            setShowMenu(!showMenu)
                            console.log('changed')
                        }}
                    />
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
            {menu}
        </nav>
    )
}
export default HeaderMenu;