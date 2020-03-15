import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const FileUploader = props => {
  const handleOnChange = event => {
    const { value } = event.target;
    const { onChange, name } = props;
    onChange && onChange({ value, name, event });
  };

  const {
    className,
    inputClassName,
    labelClassName,
    label,
    readOnly,
    error,
    helperText
  } = props;

  const _className = cx(styles.uploadBtnWrapper, className);

  const _inputClassName = cx(styles.input, inputClassName);

  const _labelClassName = cx(styles.label, labelClassName, {
    [styles.error]: error,
    [styles.readonly]: readOnly
  });

  const _helperTextClassName = cx(styles.helperText, { [styles.error]: error });

  let _props = {
    disabled: readOnly,
    className: _inputClassName,
    onChange: handleOnChange
  };

  return (
    <div className={_className}>
      {label ? <label className={_labelClassName}>{label}</label> : null}

      <input {..._props} type="file" />

      {helperText && helperText.length ? (
        <span className={_helperTextClassName}>{helperText}</span>
      ) : null}
    </div>
  );
};

FileUploader.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  /* Will be applied to container */
  className: PropTypes.string,
  /* Will be applied to underlying input tag */
  inputClassName: PropTypes.string,
  /* Will be applied to label */
  labelClassName: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

FileUploader.defaultProps = {
  className: "",
  inputClassName: "",
  labelClassName: "",
  label: "Choose File",
  readOnly: false
};

export default FileUploader;
