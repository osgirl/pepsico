import { GET_PRODUCTS, SALE_PRODUCT } from "../actionTypes/product";

export default function productReducer(prevState = { products: [] }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        products: [
          { id: 1, title: "mac book pro", price: 2000, stock: 20 },
          { id: 2, title: "dell xps", price: 1300, stock: 40 },
          { id: 3, title: "hp ultra book", price: 1000, stock: 27 }
        ]
      };
    case SALE_PRODUCT:
      let index = prevState.products.findIndex(p => p.id == action.id);
      prevState.products[index] = {
        ...prevState.products[index],
        stock: prevState.products[index].stock - 1
      };
      return { ...prevState, products: prevState.products };
    default:
      return prevState;
  }
}
