import { Component } from "react"

import "./UniBoard.css"

import UniCard from "./UniCard.js"
import UnicodeRegistry from "../logic/UnicodeRegistry.js"

class UniBoard extends Component {
  constructor () {
    super()
    this.UCD = new UnicodeRegistry()
    //this.gallery = this.UCD.getRange(0,100)
    this.gallery = this.UCD.random(100)
    this.options = {
      range: 100,
      start: 0,
      pattern: "",
      regex: false
    }
  }

  updateGallery (options) {
    this.options = {
      ...this.options,
      ...options
    }
    this.gallery = this.UCD.getRange(
      this.options.start || 0, this.options.range || undefined
    ).search(
      this.options.pattern,
      this.options.regex
    )
  }

  render () {
    const cards = this.gallery.map(char => 
      <UniCard UCDchar={char} key={char[0]}/>
    )
    return (
      <section className="UniBoard">
        { cards }
      </section>
    )
  }
}

export default UniBoard