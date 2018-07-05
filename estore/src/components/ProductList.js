import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "mac book pro", price: 2000, stock: 20 },
        { id: 2, title: "dell xps", price: 1300, stock: 40 },
        { id: 3, title: "hp ultra book", price: 1000, stock: 27 }
      ]
    };
  }

  saleItem = id => {
    let index = this.state.products.findIndex(p => p.id == id);
    this.state.products[index].stock--;
    this.setState({ products: this.state.products });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Products</h1>
        {products.map(p => (
          <ProductListItem product={p} onSell={this.saleItem} />
        ))}
      </div>
    );
  }
}

export default ProductList;
