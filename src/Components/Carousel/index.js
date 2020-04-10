import React, { Component } from "react";
import styles from "./index.module.css";
import { Transition, animated } from "react-spring/renderprops";

class Carousel extends Component {
  state = {
    list: [
      "https://cdn.pixabay.com/photo/2019/12/30/13/10/lost-places-4729640_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/16/15/31/boy-3681679_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/11/00/47/trunks-3668420_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/14/12/13/young-3815082_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/14/12/12/young-3815077_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/15/11/19/male-3679138_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/14/12/10/young-3815069_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/16/00/20/young-3818476_1280.jpg"
    ],
    current: 0,
    next: true
  };

  //AutoSlide
  autoSlide = () => {
    this.autoStart = setInterval(() => {
      const { current, list } = this.state;
      this.setState({
        current: current + 1 >= list.length ? 0 : current + 1,
        next: true
      });
    }, 3500);
  };

  componentDidMount() {
    //Start the autoSlide when mounted
    this.autoSlide();
  }

  //Clear autoslide and resume
  clear = () => {
    clearInterval(this.autoStart);
    clearTimeout(this.resume);
    this.autoStart = undefined;
    this.resume = undefined;
  };

  //Next slide
  next = () => {
    //Stop and Clear the auto slides
    this.clear();

    //Update the current index of slide
    const { current, list } = this.state;
    this.setState({
      current: current + 1 >= list.length ? 0 : current + 1,
      next: true
    });
  };

  prev = () => {
    //Stop and Clear the auto slides
    this.clear();

    //Update the current index of slide
    const { current, list } = this.state;
    this.setState({
      current: current - 1 < 0 ? list.length - 1 : current - 1,
      next: false
    });
  };

  //If autoSlide is stopped
  //And in Idle state then resume autoslide
  componentDidUpdate = () => {
    if (!this.resume && !this.autoStart) {
      this.resume = setTimeout(() => {
        this.autoSlide();
      }, 1500);
    }
  };

  //Clear on unmount
  componentWillUnmount = () => {
    this.clear();
  };

  render() {
    const { current, list, next } = this.state;

    //Generate slides
    const slides = list.map(e => style => (
      <animated.div
        className={styles.slide}
        style={{
          ...style,
          backgroundImage: `url(${e})`
        }}
      ></animated.div>
    ));

    const animationDirection = next
      ? {
          from: { opacity: 0, transform: "translate3d(100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
        }
      : {
          from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(100%,0,0)" }
        };

    //Wrap inside the transition group
    const item = (
      <Transition
        native
        reset
        unique
        items={current}
        from={animationDirection.from}
        enter={animationDirection.enter}
        leave={animationDirection.leave}
      >
        {index => slides[index]}
      </Transition>
    );

    return (
      <>
        {/* Slides */}
        <div className={styles.wrapper}>{item}</div>

        {/* Controls */}
        <div className={styles.controls}>
          <span onClick={this.prev}>Prev</span>
          <span onClick={this.next}>Next</span>
        </div>
      </>
    );
  }
}

export default Carousel;
