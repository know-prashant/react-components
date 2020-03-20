import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const Accordion = ({ children, onChange, isOpen, label }) => {
  const onChangeHandler = () => {
    onChange && onChange(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <span
        className={cx(styles.toggler, { [styles.active]: isOpen })}
        onClick={onChangeHandler}
      >
        {label}
      </span>
      <div
        className={cx(styles.panel, {
          [styles.active]: isOpen
        })}
      >
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string.isRequired
};

Accordion.defaultProps = {
  isOpen: false,
  children: null,
  label: "Accordion"
};

export default Accordion;
