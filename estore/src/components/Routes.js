import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";
function MyComp() {
  return <h1>My Comp</h1>;
}

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/products" component={ProductList} />
        <Route
          exact
          path="/products/new"
          render={props => (
            <AddProduct
              {...props}
              isAuthenticated={this.props.isAuthenticated}
            />
          )}
        />
        <Route exact path="/my" component={MyComp} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route
          render={props => (
            <NotFound
              onLoad={this.props.onLoad}
              onDestroy={this.props.onDestroy}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
