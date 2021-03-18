import { Component } from "react";

import SearchBar from "../tools/SearchBar.js"
import ToggleRandom from "../tools/ToggleRandom.js"

class Toolbar extends Component {
  render () {
    return (
      <nav>
        <SearchBar onChange={this.props.onChange}/>
        <ToggleRandom onChange={this.props.onChange}/>
      </nav>
    )
  }
}

export default Toolbar