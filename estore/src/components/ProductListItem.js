import React from "react";
const ProductListItem = props => (
  <div style={{ margin: "10px", padding: "20px", border: "1px solid grey" }}>
    <h2>{props.product.title}</h2>
    <h3>{props.product.price}</h3>
    <h4>{props.product.stock}</h4>
    <button onClick={() => props.onSell(props.product.id)}>SELL</button>
  </div>
);

export default ProductListItem;
