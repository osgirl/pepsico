import React from "react";

function makeHeader() {
  return <h1>E-Store</h1>;
}

function Header() {
  return <header>{makeHeader()}</header>;
}

export default Header;
