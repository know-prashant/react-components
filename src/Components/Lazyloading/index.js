import React, { Component } from "react";
import styles from "./index.module.css";
import { debounce } from "lodash";

const URL = "https://reqres.in/api/users";

class LazyLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentPage: 0,
      isLoading: false,
      error: false
    };
  }

  componentDidMount() {
    this.fetchData();
    window.addEventListener("scroll", debounce(this.lazyLoad, 300));
    window.addEventListener("resize", debounce(this.lazyLoad, 300));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
    window.removeEventListener("resize", () => {});
  }

  lazyLoad = () => {
    const advance = 100;
    const { innerHeight, scrollY } = window;
    const { offsetHeight } = document.body;
    if (innerHeight + scrollY + advance >= offsetHeight) {
      // you're at the bottom of the page
      this.fetchData();
    }
  };

  fetchData = async () => {
    try {
      const { currentPage, list } = this.state;
      this.setState({
        error: false,
        isLoading: true
      });

      const res = await fetch(`${URL}?page=${currentPage + 1}`);
      const { data } = await res.json();

      this.setState({
        list: [...list, ...data],
        currentPage: currentPage + 1
      });
    } catch (e) {
      this.setState({
        error: true
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    const { list, isLoading, error } = this.state;

    const users = list.map(e => (
      <div key={e.id} className={styles.item}>
        <div className={styles.wrapper}>
          <img src={e.avatar} alt={e.first_name} />
          <span>
            Name: {e.first_name} {e.last_name}
          </span>
          <span>Email: {e.email}</span>
        </div>
      </div>
    ));

    return (
      <>
        {isLoading && <div className={styles.fullScreenLoader}></div>}
        <div className={styles.container}>{users}</div>
        {error && (
          <div className={styles.error}>
            There was some error while fetching the data
          </div>
        )}
      </>
    );
  }
}

export default LazyLoading;
