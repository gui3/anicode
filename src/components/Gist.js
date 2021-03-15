import {Component} from "react"

class Gist extends Component {
  render () {
    return (
      <p>{this.props.username + this.props.id}</p>
    )
    // <script src="https://gist.github.com/gui3/6e8c14e8587b319a09eb32847c0884df.js"></script>
  }
}

export default Gist