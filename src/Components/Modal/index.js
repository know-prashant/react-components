import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import cx from "classnames";

const Modal = props => {
  const {
    isActive,
    title,
    width,
    children,
    footerNode,
    hideCloseButton,
    onClose,
    className,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd
  } = props;

  if (!isActive) {
    return null;
  }

  return (
    <div
      className={cx(styles.root, className)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Modal Container */}
      <div className={styles.container}>
        <div
          className={styles.main}
          style={{
            width: `${width}px`
          }}
        >
          {/* Header starts */}
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div
              className={cx(
                styles.close,
                `${hideCloseButton ? styles.hideButton : ""}`
              )}
              onClick={onClose}
            />
          </div>

          {/* Content Starts */}
          <div className={styles.content}>{children}</div>

          {/* Footer starts */}
          {footerNode && <div className={styles.footer}>{footerNode}</div>}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  footerNode: PropTypes.element,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  onClose: PropTypes.func,
  hideCloseButton: PropTypes.bool,
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func
};

Modal.defaultProps = {
  width: 600,
  title: "Modal"
};

export default Modal;
