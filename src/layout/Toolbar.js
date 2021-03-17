import { Component } from "react";

import SearchBar from "../tools/SearchBar.js"

class Toolbar extends Component {
  render () {
    return (
      <nav>
        <SearchBar />
      </nav>
    )
  }
}

export default Toolbar