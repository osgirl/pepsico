import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Routes from "./components/Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showNavBar: true, showHeader: true, isAuthenticated: false };
    this.hideNavAndHeader = this.hideNavAndHeader.bind(this);
    this.showNavAndHeader = this.showNavAndHeader.bind(this);
  }

  hideNavAndHeader() {
    this.setState({ showNavBar: false, showHeader: false });
  }

  showNavAndHeader() {
    this.setState({ showNavBar: true, showHeader: true });
  }

  render() {
    return (
      <div id="header" className="container">
        {this.state.showHeader && <Header />}
        {this.state.showNavBar && (
          <nav>
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/products/new">Add Product</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>
        )}
        <button onClick={() => this.setState({ isAuthenticated: true })}>
          Login
        </button>
        <button onClick={() => this.setState({ isAuthenticated: false })}>
          Logout
        </button>
        <Routes
          onLoad={this.hideNavAndHeader}
          onDestroy={this.showNavAndHeader}
          isAuthenticated={this.state.isAuthenticated}
        />
      </div>
    );
  }
}

export default App;
