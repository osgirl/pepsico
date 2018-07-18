import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

const styles = {
  item: {
    margin: "10px",
    padding: "20px",
    border: "1px solid grey"
  },
  root: {
    margin: "15px"
  }
};

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
    let { product, onSell, classes } = this.props;
    console.log(classes);
    return (
      <Card className={classes.root}>
        <CardHeader title={product.title} />
        <Typography variant="display3">{product.price}</Typography>
        <Typography>{product.stock}</Typography>
        <CardActions>
          <Button
            variant="raised"
            color="secondary"
            onClick={() => onSell(product.id)}
          >
            SELL
          </Button>
        </CardActions>
      </Card>
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

export default withStyles(styles)(ProductListItem);
