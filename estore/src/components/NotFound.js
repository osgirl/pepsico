import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <h1>The page you are looking for is not found</h1>
        <Link to="/products">Go to Products</Link>
      </div>
    );
  }
  componentWillUnmount() {
    this.props.onDestroy();
  }
}

export default NotFound;
