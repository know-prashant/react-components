import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const Loader = props => {
  const { image, fullScreen, bgColor, loaderColor, width, height } = props;
  const { top, bottom, left, right } = loaderColor;

  const loaderStyle = {
    borderTopColor: top,
    borderBottomColor: bottom,
    borderLeftColor: left,
    borderRightColor: right,
    width,
    height
  };

  return (
    <div
      className={cx(styles.loaderArea, {
        [styles.fullscreen]: fullScreen
      })}
      style={{ backgroundColor: bgColor }}
    >
      {image ? (
        image
      ) : (
        <div className={styles.loader} style={loaderStyle}></div>
      )}
    </div>
  );
};

Loader.propTypes = {
  image: PropTypes.element,
  fullScreen: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  loaderColor: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
  }).isRequired
};

Loader.defaultProps = {
  image: null,
  fullScreen: false,
  bgColor: "rgba(0, 0, 0, 0)",
  loaderColor: {
    top: "blue",
    bottom: "pink",
    left: "green",
    right: "red"
  },
  width: "140px",
  height: "140px"
};

export default Loader;
