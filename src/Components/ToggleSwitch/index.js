import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";
import { isEqual } from "lodash";

class ToggleSwitch extends Component {
  static propTypes = {
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    className: PropTypes.string,
    rounded: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "success", "danger"]),
    /* Children to show on active state  */
    checkedChildren: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]),
    /* Children to show on inactive state */
    uncheckedChildren: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]),
    innerRef: PropTypes.instanceOf(Element)
  };

  static defaultProps = {
    defaultChecked: false,
    checked: false,
    variant: "primary"
  };

  constructor(props) {
    super(props);
    const { checked, defaultChecked } = this.props;
    this.state = {
      checked: defaultChecked || checked || false
    };
  }

  handleChange = e => {
    const { checked } = e.target;
    const { name, onChange } = this.props;
    this.setState({ checked });
    onChange &&
      onChange({
        name,
        checked
      });
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.checked, this.props.checked)) {
      this.setState({
        checked: this.props.checked
      });
    }
  }

  render() {
    const { checked } = this.state;

    const {
      rounded,
      checkedChildren,
      uncheckedChildren,
      className,
      name,
      variant,
      innerRef
    } = this.props;

    const _className = cx(styles.wrapper, className);

    const _slideClassName = cx(styles.slider, styles[variant], {
      [styles.round]: rounded
    });

    const _checkedChildrenClassName = cx(styles.children, styles.checked, {
      [styles.visible]: checked
    });

    const _uncheckedChildrenClassName = cx(styles.children, styles.unchecked, {
      [styles.visible]: !checked
    });

    return (
      <span className={_className}>
        <span className={styles.switch}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
            name={name}
            ref={innerRef}
          />

          {/* Overlay */}
          <span className={_slideClassName} />

          {/* Childrens */}
          <>
            <span className={_checkedChildrenClassName}>
              {checkedChildren || null}
            </span>
            <span className={_uncheckedChildrenClassName}>
              {uncheckedChildren || null}
            </span>
          </>
        </span>
      </span>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <ToggleSwitch {...props} innerRef={ref} />;
});
