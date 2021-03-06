import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import {
  getProductsActionCreator,
  saleProductActionCreator
} from "../actionCreators/product";
import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getProducts();
    this.props.getProducts();
    this.props.getProducts();
  }

  saleItem = id => {
    this.props.saleProduct(id);
  };

  render() {
    const { products } = this.props;

    return (
      <div>
        <h1>Products</h1>
        {this.props.isLoading && (
          <img src="http://www.betterbutter.in/images/loading_recipe_image.gif" />
        )}
        {products.map(p => (
          <ProductListItem
            key={p.id}
            product={{ ...p }}
            onSell={this.saleItem}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {};
ProductList.defaultProps = {};

function mapStateToProps(state) {
  return {
    products: state.products,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProductsActionCreator()),
    saleProduct: id => dispatch(saleProductActionCreator(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
