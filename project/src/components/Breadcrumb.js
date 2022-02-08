import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../css/search.css"

export default function BreadcrumbHeseg(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px 10px 0 20px",
            margin: "3% 5%",

            width: "200px",
            height: "40px",

            background: "#FFFFFF",
            border: "1px solid #FBC5A6",
            boxSizing: "borderBox",
            borderRadius: "20px"
        }}>
            <Breadcrumb>
                <Breadcrumb.Item href="#">
                    Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {props.hool}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div >
    );
}
