import React, { Component } from "react";
import VoiceVisualizer from "./index";

class VoiceVisualizerTest extends Component {
  state = {
    level: 1
  };

  componentDidMount = () => {
    this.interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      this.setState({ level: randomNumber });
    }, 100);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    const { level } = this.state;
    return <VoiceVisualizer level={level} />;
  }
}

export default VoiceVisualizerTest;
