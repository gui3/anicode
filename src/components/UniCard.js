import { Component } from "react";

import "./UniCard.css"

import UCDkeys from "../logic/UCDkeys.js"

class UniCard extends Component {
  render () {
    return (
      <article className="UniCard">
        <div className="char">
          {  String.fromCharCode(
            parseInt(this.props.UCDchar[0], 16)
            ) }
        </div>
        <div className="brief">
          <ul>
            {
              this.props.UCDchar
              .map((v, i) => v 
                ? <li key={v + ":" + i}>
                    <strong>{ UCDkeys[i] } : </strong>
                    {v}
                  </li> 
                : ""
              )
            }
          </ul>
        </div>
      </article>
    )
  }
}

export default UniCard