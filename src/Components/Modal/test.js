import React, { Component } from "react";
import Modal from "./index";
import Button from "../Button";

class ModalTest extends Component {
  state = {
    isActive: false
  };

  onClose = () => {
    this.setState({
      isActive: false
    });
  };

  showModal = () => {
    this.setState({
      isActive: true
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <>
        <Button onClick={this.showModal} label="Show Modal" variant="primary" />
        <Modal isActive={isActive} onClose={this.onClose} title="Modal">
          <h1>Hello Modal!.</h1>
        </Modal>
      </>
    );
  }
}

export default ModalTest;
