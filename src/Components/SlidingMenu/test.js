import React, { Component } from "react";
import SlidingMenu from "./index";

class SlidingMenuTest extends Component {
  state = {
    isOpen: true
  };

  onChange = isOpen => {
    this.setState({
      isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return <SlidingMenu isOpen={isOpen} onChange={this.onChange} />;
  }
}

export default SlidingMenuTest;
