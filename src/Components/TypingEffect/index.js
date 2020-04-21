import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class TypingEffect extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    wordsPerSecond: PropTypes.number.isRequired
  };

  static defaultProps = {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    wordsPerSecond: 20
  };

  state = {
    runningText: "",
    index: 0
  };

  componentDidMount() {
    this.generateText();
  }

  componentDidUpdate() {
    this.generateText();
  }

  generateText = () => {
    //Clear existing time if running
    clearTimeout(this.timer);

    const { runningText, index } = this.state;
    const { text, wordsPerSecond } = this.props;

    //Speed of generting text
    const speed = 1000 / wordsPerSecond;

    if (index < text.length) {
      this.timer = setTimeout(() => {
        this.setState({
          runningText: runningText + text[index],
          index: index + 1
        });
      }, speed);
    } else {
      //Clear timer if generated completely
      clearTimeout(this.timer);
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { runningText } = this.state;

    return (
      <div className={styles.typingArea}>
        {runningText}
        <span className={styles.blinkingCursor}></span>
      </div>
    );
  }
}

export default TypingEffect;
