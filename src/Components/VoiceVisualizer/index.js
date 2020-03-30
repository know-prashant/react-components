import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const VoiceVisualizer = ({ level }) => {
  level = level > 10 ? 9 : level;
  const height = level * 10;
  //const randomNumber = Math.random();
  const siblingHeight = height * 0.7;

  return (
    <div className={styles.wrapper}>
      <span style={{ height: `${siblingHeight}%` }}></span>
      <span style={{ height: `${height}%` }}></span>
      <span style={{ height: `${siblingHeight}%` }}></span>
    </div>
  );
};

VoiceVisualizer.propTypes = {
  level: PropTypes.number.isRequired
};

VoiceVisualizer.defaultProps = {
  level: 1
};

export default VoiceVisualizer;
