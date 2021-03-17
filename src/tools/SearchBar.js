import { Component } from "react";

import "./SearchBar.css"

class SearchBar extends Component {
  search () {
    alert("hello")
  }

  render () {
    return (
      <div className="SearchBar">
        <input placeholder="search"></input>
        <button onClick={this.search}>&#x1F50D;</button>
      </div>
    )
  }
}

export default SearchBar