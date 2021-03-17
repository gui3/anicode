import {Component} from "react"

import "./Header.css"

import Toolbar from "./Toolbar.js"

class Header extends Component {
  render () {
    return (
      <header>
        <div className="logo">
          <h1>
            Anicode
          </h1>
          <p>
            The unicode lexicon
          </p>
        </div>

        <Toolbar/>
      </header>
    )
  }
}

export default Header