import React, { Component } from "react";
import Pagination from "./index";

class PaginationTest extends Component {
  state = {
    current: 1
  };

  onChange = ({ start, end, current }) => {
    console.log(start, end, current);
    this.setState({
      current
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Pagination
        current={current}
        onChange={this.onChange}
        totalItems={43}
        perPage={7}
      />
    );
  }
}

export default PaginationTest;
