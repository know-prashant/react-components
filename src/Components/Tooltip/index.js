import React, { Component } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import cx from "classnames";
import { Spring } from "react-spring/renderprops";

class ToolTip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
    active: PropTypes.bool.isRequired,
    classname: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    text: "",
    placement: "bottom",
    active: false
  };

  state = {
    active: this.props.active
  };

  show = () => {
    this.setState({
      active: true
    });
  };

  hide = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { text, placement, children, classname } = this.props;
    const { active } = this.state;

    return (
      <div
        className={cx(styles.tooltip, classname)}
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        {children}
        {active && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <span
                className={cx(styles.tooltiptext, styles[placement])}
                style={props}
              >
                {text}
              </span>
            )}
          </Spring>
        )}
      </div>
    );
  }
}

export default ToolTip;
