import React, { Component } from "react";
import styles from "./index.module.css";

class ScrollIndicator extends Component {
  state = {
    scrolledPercentage: 0
  };

  calculateScrolledInPercentage = () => {
    //How much scrolled
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    //Full height
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    //Percentage scrolled
    const scrolledPercentage = (winScroll / height) * 100;

    //Update state
    this.setState({
      scrolledPercentage
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.calculateScrolledInPercentage);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
  }

  render() {
    const { scrolledPercentage } = this.state;

    return (
      <div className={styles.header}>
        <h1>Scroll Indicator</h1>
        <div className={styles.progressContainer}>
          {/* Update the width in percentage */}
          <div
            className={styles.progressBar}
            style={{ width: `${scrolledPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ScrollIndicator;
