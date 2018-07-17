import { takeLatest, put, takeEvery, throttle } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actionTypes/product";
import { getProductsSuccessActionCreator } from "../actionCreators/product";
import axios from "axios";

function* getProducts() {
  let response = yield axios.get("http://localhost:4000/products");
  let products = response.data;
  yield put(getProductsSuccessActionCreator(products));
}

export function* productWatcher() {
  yield throttle(1000, GET_PRODUCTS, getProducts);
}
