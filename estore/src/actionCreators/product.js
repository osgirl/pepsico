import { GET_PRODUCTS, SALE_PRODUCT } from "../actionTypes/product";

export function getProductsActionCreator() {
  return { type: GET_PRODUCTS };
}

export function saleProductActionCreator(id) {
  return { type: SALE_PRODUCT, id };
}
