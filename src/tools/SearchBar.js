import { Component } from "react";

import "./SearchBar.css"

class SearchBar extends Component {
  search (e) {
    const pattern = e.target.value
    this.props.onChange({
      pattern
    })
  }

  render () {
    return (
      <div className="SearchBar">
        <input
        placeholder="search"
        onKeyUp={e => this.search(e)}/>
        <button>&#x1F50D;</button>
      </div>
    )
  }
}

export default SearchBar