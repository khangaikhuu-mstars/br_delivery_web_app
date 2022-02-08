import React from "react";
import { FormControl, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import "../css/search.css"
// import "./App.css";
function Search() {
    let foodInput = "";
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        let foodName = foodInput.value;
        let path = `/search?q=${foodName}`;
        history.push(path)
    }
    return (
        <>
            <div className="haih">
                <Form onSubmit={handleSubmit} >
                    <div className="search">
                        <input
                            type="text"
                            className="searchInput"
                            ref={(input) => (foodInput = input)}
                            placeholder="Хайх"
                        />
                        {/* <button >
                            {" "}
                            <img
                                className="searchIcon"
                                src="/icons/searchicon.svg"
                                width={20}
                                height={25}
                            />
                        </button> */}
                    </div>
                </Form>
            </div>
        </>
    );
}
export default Search;
