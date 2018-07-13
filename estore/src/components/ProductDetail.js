import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>ProductDetail - {this.props.match.params["id"]}</h1>
        <button onClick={() => this.props.history.push("/products")}>
          List
        </button>
      </div>
    );
  }
}

export default ProductDetail;
