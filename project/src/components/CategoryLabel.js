import React from "react";
import '../css/category.css'
import MainDishMenu from "./MainDishMenu";
import Sales from "./Sales";
import Salad from "./Salad";
import Desserts from "./Desserts";
import { NavLink } from "react-router-dom";

const CategoryLabel = () => {
    return (
        <div className="container my-5 pb-5">
            <div className="row border-b  my-4 seeAll">
                <NavLink className="seeAllButton"
                    to="/menu/sale">
                    <p className="col-6 hmm fw-bold ms-2 categoryName">Хямдралтай</p>

                    <button className="col-2 ondor py-2 px-3 arrow">
                        <span className="inactive-10">Бүгдийг харах</span>
                        <span className="orgon">&#62;</span> </button>
                </NavLink>
            </div>
            <Sales />
            <div className="row border-b my-4 seeAll" >
                <NavLink className="seeAllButton"
                    to="/menu">
                    <p className="col-6 hmm fw-bold ms-2  categoryName">Үндсэн хоол</p>
                    <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                        <span className="inactive-10">Бүгдийг харах</span>
                        <span className="orgon">&#62;</span> </button>
                </NavLink>
            </div>
            <MainDishMenu />
            <div className="row border-b m-auto my-4 seeAll">
                <NavLink className="seeAllButton"
                    to="/menu/salad">
                    <p className="col-6 hmm fw-bold ms-2 categoryName">Салад ба зууш</p>
                    <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                        <span className="inactive-10">Бүгдийг харах</span>
                        <span className="orgon">&#62;</span> </button>
                </NavLink>
            </div>
            <Salad />
            <div className="row border-b m-auto my-4 seeAll">
                <NavLink className="seeAllButton"
                    to="/menu/snack">
                    <p className="col-6 hmm fw-bold ms-2 categoryName ">Амттан</p>
                    <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                        <span className="inactive-10">Бүгдийг харах</span>
                        <span className="orgon">&#62;</span> </button>
                </NavLink>
            </div>
            <Desserts />
        </div>
    )
}
export default CategoryLabel;
