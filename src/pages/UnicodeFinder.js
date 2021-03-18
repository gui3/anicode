import { Component } from "react"

import UniBoard from "../components/UniBoard.js"
import Header from "../layout/Header.js"

class UnicodeFinder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      range: 100,
      start: 0,
      pattern: "",
      regex: false,
      random: true
    }
  }

  onChange (options) {
    options = {
      ...this.state,
      ...options
    }
    this.setState({
      ...options
    })
  }

  render () {
    return (
      <section>
        <Header onChange={opts => this.onChange(opts)}/>

        <UniBoard options={this.state}/>
      </section>
    )
  }
}

export default UnicodeFinder