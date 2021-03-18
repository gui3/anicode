import { Component } from "react"

import reactLogo from "../assets/reactLogo.png"

import "./Footer.css"

class Footer extends Component {
  render () {
    return (
      <footer>
        <hr/>
        <p>
          Made with 
          <img
          alt="react logo"
          className="logo"
          src={reactLogo}/>
        </p>
      </footer>
    )
  }
}

export default Footer