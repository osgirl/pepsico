import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    color: "red"
  },
  colorPrimary: {
    backgroundColor: "orange",
    color: "yellow"
  },
  flex: {
    flexGrow: 1
  }
});

function makeHeader() {
  return <h1>E-Store</h1>;
}

// function Header({ classes }) {
//   console.log(classes);
//   return [
//     <header className={classNames(classes.root, classes.header)}>
//       {makeHeader()}
//     </header>,
//     <header>{makeHeader()}</header>
//   ];
// }

function Header({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            News
          </Typography>
          &nbsp;|
          <Button color="inherit">Products</Button>
          <Button color="inherit">Add Product</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
