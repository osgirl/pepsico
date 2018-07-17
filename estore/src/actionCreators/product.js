import {
  GET_PRODUCTS,
  SALE_PRODUCT,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product";

export function getProductsActionCreator() {
  return { type: GET_PRODUCTS };
}

export function getProductsSuccessActionCreator(products) {
  return { type: GET_PRODUCTS_SUCCESS, products };
}

export function saleProductActionCreator(id) {
  return { type: SALE_PRODUCT, id };
}
