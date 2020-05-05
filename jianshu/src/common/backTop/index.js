import React, { Component } from "react";

class BackToTop extends Component {
  BackToTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="back-to-top" onClick={this.BackToTop}>回到顶部</div>
    )
  }
}

export default BackToTop