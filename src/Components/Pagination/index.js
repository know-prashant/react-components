import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import cx from "classnames";

const Pagination = props => {
  const getTotalPages = () => {
    const { totalItems, perPage } = props;
    return Math.ceil(totalItems / perPage);
  };

  const next = () => {
    const { perPage, current, onChange } = props;
    const total = getTotalPages();

    if (current < total) {
      const start = current * perPage;
      const end = (current + 1) * perPage;
      onChange && onChange({ start, end, current: current + 1 });
    }
  };

  const prev = () => {
    const { perPage, current, onChange } = props;
    const total = getTotalPages();

    if (current > 1 && current <= total) {
      const start = (current - 2) * perPage;
      const end = (current - 1) * perPage;
      onChange && onChange({ start, end, current: current - 1 });
    }
  };

  const direct = i => {
    const { perPage, onChange, current } = props;
    if (current !== i) {
      const start = (i - 1) * perPage;
      const end = i * perPage;
      onChange && onChange({ start, end, current: i });
    }
  };

  const { current } = props;
  const total = getTotalPages();

  let links = [];
  for (let i = 1; i <= total; i++) {
    links.push(
      <li
        onClick={() => direct(i)}
        key={i}
        className={cx({ [styles.active]: current === i })}
      >
        {i}
      </li>
    );
  }

  return (
    <ul className={styles.wrapper}>
      <li onClick={prev}>&lt;</li>
      {links}
      <li onClick={next}>&gt;</li>
    </ul>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

Pagination.defaultProps = {
  totalItems: 36,
  perPage: 5,
  current: 1
};

export default Pagination;
