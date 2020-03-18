import React, { PureComponent } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class ProgressBar extends PureComponent {
  static propTypes = {
    /* Custom color for progress bar */
    color: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]).isRequired,
    /* starts progress bar */
    visible: PropTypes.bool,
    /* provide a function to perform actions when progress reaches 100%  */
    onCompleteHandler: PropTypes.func,
    /* Any custom class to modify the appearance for future requ. */
    className: PropTypes.string,
    /* percentage to increment the progress bar */
    percentage: PropTypes.number,
    children: PropTypes.node
  };

  static defaultProps = {
    visible: false,
    size: "xs",
    className: "",
    progress: 0
  };

  componentDidUpdate() {
    const { percentage, onCompleteHandler } = this.props;
    if (percentage === 100) {
      onCompleteHandler();
    }
  }

  render() {
    const _class = cx(
      this.props.className,
      styles.progress,
      styles[this.props.size]
    );

    const _style = {
      ...(this.props.color && {
        backgroundColor: this.props.color
      }),
      width: `${this.props.percentage < 100 ? this.props.percentage : 100}%`
    };

    return (
      <div className={_class}>
        <div style={_style} className={styles.progress_bar}></div>
        {this.props.children}
      </div>
    );
  }
}

export default ProgressBar;
