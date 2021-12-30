import React from "react";
import '../css/category.css'
import title from 'react'
const CategoryLabel = (props) => {
    return (
        <div className="container mt-4">
            <div className="row border-b ">
                <p className="col-6 hmm fw-bold ">{props.title}</p>
                <button className="col-2 ondor py-2 px-3 arrow">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>
            </div>
        </div>
    )
}
export default CategoryLabel;
