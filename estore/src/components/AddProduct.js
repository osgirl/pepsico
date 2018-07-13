import React, { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      stock: 0
    };
    this.priceRef = null;
  }

  setPriceRef = r => {
    this.priceRef = r;
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <h2>You are not authorized to add product</h2>;
    } else {
      return (
        <div>
          <fieldset>
            <legend>Add AddProduct</legend>
            <form
              onSubmit={e => {
                console.log(this.state, this.priceRef.value);
                e.preventDefault();
              }}
            >
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={this.state.title.toUpperCase()}
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({ title: e.target.value });
                }}
              />
              <label htmlFor="price">Price</label>
              <input type="number" name="price" ref={this.setPriceRef} />
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                value={this.state.stock}
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({ stock: e.target.value });
                }}
              />
              <input type="submit" value="Submit" />
            </form>
          </fieldset>
        </div>
      );
    }
  }
}

export default AddProduct;
