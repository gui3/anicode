import { Component } from "react";

import "./ToggleRandom.css"

class ToggleRandom extends Component {
  constructor (props) {
    super(props)
    this.checked = true
  }

  toggle (e) {
    this.checked = e.target.checked
    this.props.onChange({
      random: this.checked
    })
  }

  click (e) {
    e.target !== this.inputElement
    && this.inputElement.click()
  }

  render () {
    return (
      <div
      className="ToggleRandom"
      onClick={e => this.click(e)}>
        <input
        id="InputRandom"
        type="checkbox"
        name="InputRandom"
        checked={this.checked}
        onChange={e => this.toggle(e)}
        ref={input => this.inputElement = input} />
        <label>Random &#x1F3B2;</label>
      </div>
    )
  }
}

export default ToggleRandom