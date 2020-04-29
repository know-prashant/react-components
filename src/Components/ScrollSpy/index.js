import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

class ScrollSpy extends Component {
  state = {
    sectionOffsetPosition: []
  };

  static propTypes = {
    menus: PropTypes.arrayOf(PropTypes.string).isRequired,
    sections: PropTypes.arrayOf(PropTypes.element).isRequired,
    scrollSpeed: PropTypes.number.isRequired
  };

  static defaultProps = {
    scrollSpeed: 17
  };

  componentDidMount() {
    //Get the list of sections
    const childrens = this.sectionRef.children;

    //Get menu height
    const navHeight = this.navRef.offsetHeight;

    //Store the top position of each section
    const sectionOffsetPosition = Array.prototype.map.call(
      childrens,
      e => e.offsetTop - navHeight
    );

    this.setState({ sectionOffsetPosition });

    //Listen to the scroll event
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    //Remove the scroll listener
    window.removeEventListener("scroll", () => {});
  }

  handleScroll = () => {
    //Get the offset of all the sections
    const { sectionOffsetPosition } = this.state;

    //Get the list of menu links
    const menuChildrens = this.menuRef.children;

    //Current scroll position
    const scrollPosition = window.pageYOffset;

    //Check the scroll position with the section's position
    //Add 'active' class to the menu link whose section is visible
    sectionOffsetPosition.forEach((e, i) => {
      if (e <= scrollPosition) {
        //Remove active class from all the links
        Array.prototype.forEach.call(menuChildrens, f => {
          f.classList.remove(styles.active);
        });

        //Add active to class to visible section link
        menuChildrens[i].classList.add(styles.active);
      }
    });

    //If reached to the bottom of the page
    //Add the active class to last menu item
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      Array.prototype.forEach.call(menuChildrens, f => {
        f.classList.remove(styles.active);
      });
      menuChildrens[menuChildrens.length - 1].classList.add(styles.active);
    }
  };

  scrollTowardsTop = pos => {
    //No of pixel to scroll
    const scrollStepInPx = (window.pageYOffset - pos) / 5;

    //If reached to the desired div
    //Stop scrolling
    if (window.pageYOffset === pos) {
      clearInterval(this.timer);
    }

    //If reached to the top of the page
    //Stop scrolling
    if (window.innerHeight + window.scrollY <= 10) {
      clearInterval(this.timer);
    }

    //Scroll step by step
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  scrollTowardsBottom = pos => {
    //No of pixel to scroll
    const scrollStepInPx = (pos - window.pageYOffset) / 5;

    //If reached to the desired div
    //Stop scrolling
    if (window.pageYOffset >= pos) {
      clearInterval(this.timer);
    }

    //If reached to the bottom of the page
    //Stop scrolling
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      clearInterval(this.timer);
    }

    //Scroll step by step
    window.scroll(0, window.pageYOffset + scrollStepInPx + 5);
  };

  //Start scrolling to top
  scrollTo = pos => {
    //Clear existing timers
    clearInterval(this.timer);

    //Speed at which scroll to div
    const delayInMs = 16;

    //Scroll direction
    const scrollStep =
      window.pageYOffset > pos
        ? this.scrollTowardsTop
        : this.scrollTowardsBottom;

    //Start the scroll
    this.timer = setInterval(() => {
      scrollStep(pos);
    }, delayInMs);
  };

  handleScrollTo = i => {
    const { sectionOffsetPosition } = this.state;

    //Scroll to the selected div
    this.scrollTo(sectionOffsetPosition[i]);
  };

  render() {
    const { menus, sections } = this.props;

    //Menu
    const menusMapped = menus.map((e, i) => (
      <li
        key={e}
        onClick={() => this.handleScrollTo(i)}
        className={cx({
          [styles.active]: i === 0
        })}
      >
        <span>{e}</span>
      </li>
    ));

    //Sections
    const sectionsMapped = sections.map((e, i) => (
      <div key={i} className={cx(styles.section)}>
        {e}
      </div>
    ));

    return (
      <div>
        <nav className={styles.menu} ref={e => (this.navRef = e)}>
          <ul ref={e => (this.menuRef = e)}>{menusMapped}</ul>
        </nav>
        <div className={styles.container} ref={e => (this.sectionRef = e)}>
          {sectionsMapped}
        </div>
      </div>
    );
  }
}

export default ScrollSpy;
