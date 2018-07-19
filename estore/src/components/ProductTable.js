import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], order: "asc" };
    this.sortByPrice = this.sortByPrice.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then(r => this.setState({ products: r.data }));
  }

  sortByPrice(order) {
    let products = this.state.products;
    if (order == "asc") {
      products.sort(function(a, b) {
        return a.price - b.price;
      });
      this.setState({ products, order: "asc" });
    } else {
      products.sort(function(a, b) {
        return b.price - a.price;
      });
      this.setState({ products, order: "desc" });
    }
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={this.state.order}
                onClick={() =>
                  this.sortByPrice(this.state.order == "asc" ? "desc" : "asc")
                }
              >
                Price
              </TableSortLabel>
            </TableCell>
            <TableCell>Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.products.map(p => (
            <TableRow>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>{p.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(ProductTable);
