import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";
import Checkbox from "../Checkbox";
import { isString, indexOf, isEqual } from "lodash";

class CheckboxGroup extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool
      })
    ).isRequired,

    name: PropTypes.string.isRequired,

    onChange: PropTypes.func,

    /* All radio items will be inline-flexed if this is true */
    inline: PropTypes.bool,

    /* Applied to container of all radio items */
    className: PropTypes.string,

    /* Applies to each item in this group */
    itemClassName: PropTypes.string,

    /* Applies to the label of each item in this group */
    labelClassName: PropTypes.string,

    /* Applied to actual input */
    inputClassName: PropTypes.string,

    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

    /* Applies to custom label for checkbox */
    customLabelClassName: PropTypes.string,

    checkedItemLabelClassName: PropTypes.string,

    /* To be used for resetting state */
    reset: PropTypes.bool,

    /* To be used for clearing state*/
    clear: PropTypes.bool,

    /* ref of the component */
    ref: PropTypes.instanceOf(Element)
  };

  static defaultProps = {
    itemClassName: "",
    className: "",
    labelClassName: "",
    inputClassName: "",
    customLabel: ""
  };

  constructor(props) {
    super(props);

    const { value, reset, clear } = props;
    let values = value || [];

    //If value is single string
    //Convert it to array
    if (isString(values)) values = [values];

    this.state = { values };

    //If reset is requested
    reset && this.resetValue();

    //If clear is requested
    clear && this.clearValue();
  }

  componentDidUpdate(previousProps) {
    const { value, reset, clear } = this.props;

    //If value is different then only update the state
    if (!isEqual(previousProps.value, value)) {
      let values = value || [];

      //If value is single string
      //Convert it to array
      if (isString(values)) values = [values];
      this.setState({ values });
    }

    //If reset is requested
    reset && this.resetValue();

    //If clear is requested
    clear && this.clearValue();
  }

  //Reset all the selected checkboxes
  resetValue = () => {
    const { name, onChange, value } = this.props;
    let values = value || [];

    //If value is single string
    //Convert it to array
    if (isString(values)) values = [values];

    this.setState({ values });
    onChange && onChange({ name, value: values, isResetted: true });
  };

  //Uncheck all checkboxes
  clearValue = () => {
    const { name, onChange } = this.props;
    this.setState({ values: [] });
    onChange && onChange({ name, value: [], isCleared: true });
  };

  //Change event listener
  handleChange = ({ name, value, checked }) => {
    const { onChange } = this.props;
    let values = [...this.state.values];

    //If checked then add the value in the checkedlist
    if (checked) {
      values.push(value);
    } else {
      //Else remove from the checked list
      const existingIndex = indexOf(values, value);
      if (existingIndex !== -1) {
        values.splice(existingIndex, 1);
      }
    }

    //Set the inner state
    this.setState({ values });

    //Send the changes to parent
    onChange && onChange({ name, value: values });
  };

  render() {
    const {
      itemClassName,
      className,
      labelClassName,
      name,
      inline,
      options,
      inputClassName,
      customLabelClassName,
      checkedItemLabelClassName
    } = this.props;

    const _itemClassName = cx(itemClassName, {
      [styles.inlineItem]: inline
    });

    const _className = cx(styles.item, className);

    const { values } = this.state;

    return (
      <div className={_className} ref={this.props.ref}>
        {/* Generate checkboxes from the array of options */}
        {options.map((option, index) => (
          <Checkbox
            booleanOutput={false}
            option={option}
            key={index}
            value={indexOf(values, option.value) !== -1}
            onChange={this.handleChange}
            name={name}
            className={_itemClassName}
            inputClassName={inputClassName}
            labelClassName={labelClassName}
            checkedItemLabelClassName={checkedItemLabelClassName}
            customLabelClassName={customLabelClassName}
          />
        ))}
      </div>
    );
  }
}

export default CheckboxGroup;
