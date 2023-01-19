import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./Features/isAuth";
import signIn from "./Features/signIn";
import signUp from "./Features/signUp";
import fetchAllProduct from "./Features/FetchData.js";
import postProduct from "./Features/addData.js";

const Store = configureStore({
  reducer: {
    signIn: signIn,
    signUp: signUp,
    isAuth: isAuth,
    allProduct: fetchAllProduct,
    addProduct: postProduct,
  },
});

export default Store;
