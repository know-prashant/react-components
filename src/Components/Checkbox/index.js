import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const Checkbox = (props, ref) => {
  const handleChange = e => {
    const { name, onChange } = props;
    const { checked } = e.target;

    if (onChange) {
      onChange({
        name,
        value: checked
      });
    }
  };

  const {
    className,
    labelClassName,
    name,
    option,
    value,
    defaultChecked,
    inputClassName,
    checkedItemLabelClassName,
    customLabelClassName
  } = props;

  const _className = cx(className, styles.item, {
    [styles.disabled]: option.disabled
  });

  const _inputClassName = cx(styles.checkbox, inputClassName);

  const _labelClassName = cx(labelClassName, styles.label, {
    [checkedItemLabelClassName]: value
  });

  const _customLabelClassName = cx(customLabelClassName, styles.customLabel);

  return (
    <div className={_className}>
      <input
        disabled={option.disabled}
        type="checkbox"
        name={name}
        id={`${name}-${option.value}`}
        value={option.value}
        defaultChecked={defaultChecked}
        checked={value}
        onChange={handleChange}
        className={_inputClassName}
        ref={ref}
      />
      <label
        className={_customLabelClassName}
        htmlFor={`${name}-${option.value}`}
      ></label>

      <label htmlFor={`${name}-${option.value}`} className={_labelClassName}>
        {option.label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.node,
    disabled: PropTypes.bool
  }),

  name: PropTypes.string.isRequired,

  onChange: PropTypes.func,

  className: PropTypes.string,

  inputClassName: PropTypes.string,

  /* Applies to the label of each item in this group */
  labelClassName: PropTypes.string,

  checkedItemLabelClassName: PropTypes.string,

  /* Applies to custom label for checkbox */
  customLabelClassName: PropTypes.string,

  value: PropTypes.bool,

  defaultChecked: PropTypes.bool,

  innerRef: PropTypes.any
};

Checkbox.defaultProps = {
  checkedItemLabelClassName: ""
};

export default React.forwardRef((props, ref) => Checkbox(props, ref));
