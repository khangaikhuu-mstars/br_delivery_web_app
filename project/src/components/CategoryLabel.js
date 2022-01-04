import React from "react";
import '../css/category.css'
import MainDishMenu from "./MainDishMenu";
import Sales from "./Sales";
import Salad from "./Salad";
import Desserts from "./Desserts"

const CategoryLabel = (props) => {
    return (
        <div className="container mt-4">
            <div className="row border-b ">
                <p className="col-6 hmm fw-bold ">Хямдралтай</p>
                <button className="col-2 ondor py-2 px-3 arrow">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>
                    <Sales/>
            </div>
            <div className="row border-b ">
                <p className="col-6 hmm fw-bold ">Үндсэн хоол</p>
                <button className="col-2 ondor py-2 px-3 arrow">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>
                    <MainDishMenu/>
            </div>
            <div className="row border-b ">
                <p className="col-6 hmm fw-bold ">Салад ба зууш</p>
                <button className="col-2 ondor py-2 px-3 arrow">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>
                    <Salad/>
            </div>
            <div className="row border-b ">
                <p className="col-6 hmm fw-bold ">Амттан</p>
                <button className="col-2 ondor py-2 px-3 arrow">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>
                    <Desserts/>
            </div>

        </div>
    )
}
export default CategoryLabel;
