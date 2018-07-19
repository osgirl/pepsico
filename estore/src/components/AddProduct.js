import React, { Component } from "react";
//import "./AddProduct.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      stock: 0,
      categories: ["Mobile", "Desktop", "Laptop"]
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
              <TextField label="Title" fullWidth />
              <TextField label="Price" fullWidth type="number" />
              <TextField label="stock" fullWidth type="number" />
              <TextField
                label="category"
                select
                fullWidth
                SelectProps={{ native: true }}
              >
                {this.state.categories.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <input type="submit" value="Submit" />
            </form>
          </fieldset>
        </div>
      );
    }
  }
}

export default AddProduct;
