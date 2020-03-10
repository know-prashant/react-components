import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const input = (props, ref) => {
  const handleOnBlur = event => {
    const { value } = event.target;
    const { onBlur, name } = props;
    onBlur && onBlur({ value, name, event });
  };

  const handleOnChange = event => {
    const { value } = event.target;
    const { onChange, name } = props;
    onChange && onChange({ value, name, event });
  };

  const handleFocus = event => {
    const { name, onFocus, value } = props;

    // To fix the issue with cursor at beginning
    if (value) {
      event.target.value = "";
      event.target.value = value;
    }

    onFocus && onFocus({ event, name, value });
  };

  const handleKeyDown = event => {
    const { name, onKeyDown } = props;
    const { value } = event.target;
    onKeyDown && onKeyDown({ value, name, event });
  };

  const {
    className,
    inputClassName,
    labelClassName,
    type,
    label,
    placeholder,
    readOnly,
    multi,
    maxLength,
    autoFocus,
    value,
    error,
    helperText
  } = props;

  const _className = cx(styles.container, className);

  const _inputClassName = cx(
    {
      [styles.input]: !multi,
      [styles.textarea]: multi,
      [styles.readonly]: readOnly,
      [styles.hasError]: error
    },
    inputClassName
  );

  const _labelClassName = cx(styles.label, labelClassName, {
    [styles.error]: error
  });
  const _helperTextClassName = cx(styles.helperText, { [styles.error]: error });

  let _props = {
    autoFocus,
    placeholder,
    value,
    readOnly,
    maxLength,
    className: _inputClassName,
    onChange: handleOnChange,
    onFocus: handleFocus,
    onBlur: handleOnBlur,
    onKeyDown: handleKeyDown
  };

  return (
    <div className={_className}>
      {label ? <label className={_labelClassName}>{label}</label> : null}

      {multi ? (
        <textarea {..._props} ref={ref}></textarea>
      ) : (
        <input {..._props} type={type} ref={ref} />
      )}

      {helperText && helperText.length ? (
        <span className={_helperTextClassName}>{helperText}</span>
      ) : null}
    </div>
  );
};

input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "date",
    "email",
    "tel",
    "url",
    "search"
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  /* Will be applied to container */
  className: PropTypes.string,
  /* Will be applied to underlying input/textarea tag */
  inputClassName: PropTypes.string,
  /* Will be applied to label */
  labelClassName: PropTypes.string,
  /* Renders a textarea if true */
  multi: PropTypes.bool,
  /* Value */
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

input.defaultProps = {
  className: "",
  inputClassName: "",
  labelClassName: "",
  type: "text",
  label: "",
  placeholder: "",
  readOnly: false,
  multi: false
};

export default React.forwardRef((props, ref) => input(props, ref));
