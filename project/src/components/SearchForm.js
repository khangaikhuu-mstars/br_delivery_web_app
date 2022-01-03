import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            foods: [],
            searchField: ""
        }
    }
    onSearchChanged = event => {
        this.setState({searchField: event.target.value})
      }

    render() {
        const filteredFoods =foods.filter(el => el.name.toLowerCase().includes(searchField))
        return(
            <Cards foods={filteredFoods}/>
        )
    }
}

export default SearchForm;