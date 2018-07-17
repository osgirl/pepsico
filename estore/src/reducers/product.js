import {
  GET_PRODUCTS,
  SALE_PRODUCT,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product";

export default function productReducer(
  prevState = { products: [], isLoading: false },
  action
) {
  console.log(action);
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        products: action.products
      };
    case SALE_PRODUCT:
      let index = prevState.products.findIndex(p => p.id == action.id);
      prevState.products[index] = {
        ...prevState.products[index],
        stock: prevState.products[index].stock - 1
      };
      console.log(prevState);
      return Object.assign({}, prevState, { products: prevState.products });

    default:
      return prevState;
  }
}
