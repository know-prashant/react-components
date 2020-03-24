import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";

const Tab = props => {
  const { activeIndex, tabs, onChange } = props;

  const disabledTabsList = () => {
    return tabs.map(e => (e.disabled ? e.label : null));
  };

  const isTabDisabled = index => {
    const disabled = disabledTabsList();
    const tab = tabs[index];
    return disabled.includes(tab.label);
  };

  const onClick = i => {
    const isDisabled = isTabDisabled(i);
    if (!isDisabled) {
      onChange(i);
    }
  };

  //Get the list of tab
  const generateTabsHeading = () => {
    const isDisabled = isTabDisabled(activeIndex);
    const disabled = disabledTabsList();

    return tabs.map((e, i) => {
      return (
        <div
          key={e.label}
          onClick={() => onClick(i)}
          className={cx(styles.tab, {
            [styles.active]: activeIndex === i && !isDisabled,
            [styles.disabled]: disabled.includes(e.label)
          })}
        >
          <span className={styles.label}>{e.label}</span>
        </div>
      );
    });
  };

  //Get the content of only active tab
  const getActiveTab = () => {
    const disabled = isTabDisabled(activeIndex);

    if (activeIndex > tabs.length || disabled) {
      return null;
    }

    const content = tabs[activeIndex] && tabs[activeIndex].content;
    return <div className={styles.content}>{content}</div>;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabsHeading}>{generateTabsHeading()}</div>
      <div className={styles.tabsContent}>{getActiveTab()}</div>
    </div>
  );
};

Tab.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

Tab.defaultProps = {
  activeIndex: 0
};

export default Tab;
