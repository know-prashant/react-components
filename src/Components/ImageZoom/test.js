import React, { Component } from "react";
import ImageZoom from "./index";

class ImageZoomTest extends Component {
  state = {
    isActive: false
  };

  onClose = () => {
    this.setState({
      isActive: false
    });
  };

  onZoom = () => {
    this.setState({
      isActive: true
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <ImageZoom
        isActive={isActive}
        imageURL={
          "https://cdn.pixabay.com/photo/2019/12/30/13/10/lost-places-4729640_1280.jpg"
        }
        onZoom={this.onZoom}
        onClose={this.onClose}
      />
    );
  }
}

export default ImageZoomTest;
