import { Component } from "react"

import "./UniBoard.css"

import UniCard from "./UniCard.js"
import UnicodeRegistry from "../logic/UnicodeRegistry.js"

class UniBoard extends Component {
  constructor (props) {
    super(props)
    this.UCD = new UnicodeRegistry()
    this.options =  {
      range: 100,
      start: 0,
      pattern: "",
      regex: false,
      random: true
    }
  }

  updateGallery () {
    const options = {
      ...this.options,
      ...this.props.options
    }

    this.options = options

    console.log(options.random)

    this.gallery = options.pattern.length > 0
    ? this.UCD.search(
        options.pattern,
        options.regex
      )
    : this.UCD
    if (options.random) {
      this.gallery = this.gallery.random(options.range)
    } else {
      this.gallery = this.gallery.getRange(
        options.start || 0,
        options.range || undefined
      )
    }
  }

  render () {
    this.updateGallery()
    const cards = this.gallery.map((char, ix) => 
      <UniCard UCDchar={char} key={ix + ":" + char[0]}/>
    )
    return (
      <section className="UniBoard">
        { cards }
      </section>
    )
  }
}

export default UniBoard