import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import styles from "./index.module.css";

const ITEMS_API_URL = "https://demo.dataverse.org/api/search";
const DEBOUNCE_DELAY = 500;

class AutoComplete extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSelectItem: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      inputStr: "",
      items: [],
      isLoading: false,
      error: {
        status: false,
        message: {}
      }
    };

    this.delayedCallback = debounce(this.fetchItems, DEBOUNCE_DELAY);
  }

  onInputChangeHandler = e => {
    const { value } = e.target;
    this.setState({
      inputStr: value
    });

    this.delayedCallback();
  };

  fetchItems = async () => {
    const { inputStr } = this.state;
    const { onChange } = this.props;

    this.setState({
      isLoading: true
    });

    try {
      //Update the state
      const res = await fetch(`${ITEMS_API_URL}?q=${inputStr}`);
      const json = await res.json();
      const { data } = json;
      const { items } = data;
      this.setState({
        items
      });

      //Return the data to the parent
      onChange && onChange(items);
    } catch (e) {
      this.setState({
        error: {
          status: true,
          message: e
        }
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  onItemClick(e) {
    const { onSelectItem } = this.props;
    //Notify the parent
    onSelectItem && onSelectItem(e);
  }

  render() {
    const { items, isLoading } = this.state;

    //Generate the list of returned suggestions
    const list = items.map(e => (
      <span
        key={e.name}
        onClick={() => this.onItemClick(e)}
        className={styles.listItem}
      >
        {e.name}
      </span>
    ));

    //Can we show the suggestions
    const canShow = list.length > 0 && !isLoading;

    return (
      <div className={styles.wrapper}>
        {/* Add loading state to the search area */}
        <div
          className={cx(styles.control, {
            [styles.isLoading]: isLoading
          })}
        >
          {/* Search box */}
          <input
            type="search"
            className={styles.searchBox}
            onChange={this.onInputChangeHandler}
          />
        </div>

        {/* Show the suggestion list*/}
        {canShow && (
          <div className={cx(styles.displayArea, styles.isHoverable)}>
            {list}
          </div>
        )}
      </div>
    );
  }
}

export default AutoComplete;
