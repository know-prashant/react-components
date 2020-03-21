import React, { Component } from "react";
import DropDown from "./index";

class DropDownTest extends Component {
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
    return <DropDown isOpen={isOpen} onChange={this.onChange} />;
  }
}

export default DropDownTest;
