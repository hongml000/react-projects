import React, { Component } from "react";

class Mychild extends Component {
  render() {
    return <div><p>{this.props.children}</p></div>
  }
}

export default Mychild