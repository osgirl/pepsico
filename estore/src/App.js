import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="header" className="container">
        <Header />
        <AddProduct />
        <ProductList />
      </div>
    );
  }
}

export default App;
