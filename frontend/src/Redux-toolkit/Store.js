import { configureStore } from "@reduxjs/toolkit";
import { isAuth } from "./Features/isAuth";
import signIn from "./Features/signIn";
import signUp from "./Features/signUp";
import fetchAllProduct from "./Features/FetchData.js";
import postProduct from "./Features/addData.js";
import { Search } from "./Features/search";
import userInfo from "./Features/userInfo";
import fetchSingleProduct from "./Features/FetchSingleData";
import addReviews from "./Features/addReviews";
import AuthId from "./Features/auth";
import AnyUserInfo from "./Features/anyUser_info";
import DeleteProduct from "./Features/deleteProduct";

const Store = configureStore({
  reducer: {
    signIn: signIn,
    signUp: signUp,
    isAuth: isAuth,
    allProduct: fetchAllProduct,
    addProduct: postProduct,
    search: Search,
    userInfo: userInfo,
    productInfo: fetchSingleProduct,
    addReviews: addReviews,
    AuthId: AuthId,
    AnyUserInfo: AnyUserInfo,
    DeleteProduct: DeleteProduct,
  },
});

export default Store;
