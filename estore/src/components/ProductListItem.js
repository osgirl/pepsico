import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class ProductListItem extends React.PureComponent {
  static propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number,
      id: PropTypes.number.isRequired
    }).isRequired
  };

  static defaultProps = {
    product: {
      title: "default",
      price: 0,
      stock: 0,
      id: -1
    }
  };

  constructor() {
    super();
    //console.log("constructor");
    this.state = { mouseOver: false };
  }

  render() {
    //console.log("render");

    {
      /*  onMouseEnter={e => this.setState({ mouseOver: true })}
  onMouseLeave={e => this.setState({ mouseOver: false })}*/
    }
    let { product, onSell } = this.props;
    return (
      <div
        style={{
          margin: "10px",
          padding: "20px",
          border: "1px solid grey",
          backgroundColor: this.state.mouseOver ? "yellow" : null
        }}
      >
        <h2>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h2>
        <h3>{product.price}</h3>
        <h4>{product.stock}</h4>
        <Button
          variant="raised"
          color="secondary"
          onClick={() => onSell(product.id)}
        >
          SELL
        </Button>
      </div>
    );
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
}

export default ProductListItem;
