import React from "react";
import foodDelivery from "./icons/foodDelivery.png"
import facebookicon from './icons/facebook_logo.png'
import instagramIcon from './icons/instagram_logo.png'
import twitterIcon from './icons/twitter_logo.png'
import lineIcon from './icons/Line_19.png'
import './App.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="pt-4 ">
                    <img className="me-2 " src={foodDelivery} alt="" />
                    <span className="food">Food delivery</span>
                </div >
                <div className="row my-3 ">
                    <div className="col-6 mt-3 ps-3  ">
                        <p className="face">Нүүр</p>
                        <p className="face">Хоолны цэс</p>
                        <p className="face">Xүргэлтийн бүс</p>
                    </div>
                    <div className="col-6 mt-3 ">
                        <p className="face">Холбоо барих</p>
                        <p className="nuuts">(976) 77123456</p>
                        <p className="nuuts">(976) 77123456</p>
                    </div>
                </div>
                <div className="Logos text-center margin100">
                    <img className="m-2" src={facebookicon} alt="facebook" />
                    <img className="m-2" src={instagramIcon} alt="instagram" />
                    <img className="m-2" src={twitterIcon} alt="twitter" />
                </div>
                <div className="text-center"> <img src={lineIcon} alt="" srcset="" /></div>
               
                <div className="ps-1">
                    <p className="nuuts">Нууцлалын бодлого</p>
                    <p className="nuuts">Үйлчилгээний нөхцөл</p>
                </div>
                <div className="text-end pb-5">
                    <p className="last">&copy; 2020 Mstars Foods LLC</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;