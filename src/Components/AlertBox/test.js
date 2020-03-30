import React, { Component } from "react";
import AlertBox from "./index";

class AlertBoxTest extends Component {
  state = {
    isActive: true
  };

  onClose = isActive => {
    this.setState({
      isActive
    });
  };

  onClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <>
        <AlertBox
          show={isActive}
          onClose={this.onClose}
          message={"Primary!: AlertBox"}
          autoClose={false}
        />

        <AlertBox
          show={isActive}
          onChange={this.onChange}
          message={"Danger!: AlertBox"}
          autoClose={false}
          variant={"danger"}
        />

        <AlertBox
          show={isActive}
          onChange={this.onChange}
          message={"Basic!: AlertBox"}
          autoClose={false}
          variant={"basic"}
        />
      </>
    );
  }
}

export default AlertBoxTest;
