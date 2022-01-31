
import React, { useState } from "react";
import "../css/orderhistory.css";

const OrderHistory = () => {
    const [isActiveOrder, setIsActiveOrder] = useState(false)
    let id = 123123;
    let order;
    if (isActiveOrder) {
        order = <>
            <div className="orders"
            >
                <div className="order-detail">
                    <div className="iconBackground">
                        <img className="orderIcon" src="/icons/market.svg" alt="" />
                    </div>
                    <ul className="order-info">
                        <li className="order-Id">true #{id}</li>
                        <li className="order-state">Хүлээгдэж буй.</li>
                    </ul>
                </div>
                <div className="order-date">2022/01/07</div>
            </div>
        </>
    } else {
        order = <>
            <div className="orders"
                onClick={() => {
                    setIsActiveOrder(true);
                }}>
                <div className="order-detail">
                    <div className="iconBackground">
                        <img className="orderIcon" src="/icons/market.svg" alt="" />
                    </div>
                    <ul className="order-info">
                        <li className="order-Id">false #{id}</li>
                        <li className="order-state">Хүлээгдэж буй.</li>
                    </ul>
                </div>
                <div className="order-date">2022/01/07</div>
            </div>
        </>
    }
    let delivered;
    const [isDeliveredOrder, setIsDeliveredOrder] = useState(false)
    if (isDeliveredOrder) {
        delivered =
            <>
                <div className="delivered-orders">
                    <div className="order-detail">
                        <div className="delivered-iconBackground">
                            <img className="delivered-orderIcon" src="/icons/market.svg" alt="" />
                        </div>
                        <ul className="order-info">
                            <li className="delivered-order-Id">true #1231231</li>
                            <li className="delivered-order-state">Амжилттай.</li>
                        </ul>
                    </div>
                    <div className="delivered-order-date">2022/01/07</div>
                </div>
            </>
    } else {
        delivered =
            <>
                <div className="delivered-orders" onClick={() => {
                    setIsDeliveredOrder(true);
                }}>
                    <div className="order-detail">
                        <div className="delivered-iconBackground">
                            <img className="delivered-orderIcon" src="/icons/market.svg" alt="" />
                        </div>
                        <ul className="order-info">
                            <li className="delivered-order-Id">false #1231231</li>
                            <li className="delivered-order-state">Амжилттай.</li>
                        </ul>
                    </div>
                    <div className="delivered-order-date">2022/01/07</div>
                </div>
            </>
    }
    let orderInfo = <>
        <div className="order-title">
            <p className="order-component-title">Дэлгэрэнгүй</p>
            <p className="active-order-id">#{id}</p>
        </div>
        <div className="orderList">
            <p className="orderItemName">Салмон загас</p>
            <p className="orderItemNumber">(1)</p>
        </div>
        <div className="orderList">
            <p className="orderItemName">Чикен бургер</p>
            <p className="orderItemNumber">(1)</p>
        </div>
    </>
    let deliveredInfo = <>
        <div className="order-title">
            <p className="order-component-title">Дэлгэрэнгүй</p>
            <p className="active-order-id">#213123123</p>
        </div>
        <div className="orderList">
            <p className="orderItemName">delivered</p>
            <p className="orderItemNumber">(1)</p>
        </div>
        <div className="orderList">
            <p className="orderItemName">Чикен бургер</p>
            <p className="orderItemNumber">(1)</p>
        </div>
    </>

    return (
        <div className="order-main ">
            <div className="order-content-box tabler-order-content-box">
                <p className="order-component-title">Захиалгын түүх</p>
                <div onClick={() => {
                    setIsDeliveredOrder(false);
                }} >
                    {order}
                </div>
                <div onClick={() => {
                    setIsActiveOrder(false);
                }}>
                    {delivered}
                </div>
            </div>

            <div className="order-content-box delivered-order-content-box">
                {isActiveOrder ? orderInfo : ""}
                {isDeliveredOrder ? deliveredInfo : ""}
            </div>
        </div>
    )
};

export default OrderHistory;
