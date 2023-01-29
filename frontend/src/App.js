import { Navbar } from "./subComponent/Navbar";
import "@fontsource/poppins";
import "./app.css";
import SignIn from "./loginComponent/Login";
import SignUp from "./loginComponent/Signup";
import Footer from "./subComponent/Footer";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MainPage from "./mainComponent/MainPage";
import Store from "./mainComponent/Store";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddProduct from "./loginComponent/profile/AddProduct";
import { WishList } from "./mainComponent/Wishlist";
import { Cart } from "./mainComponent/Cart";

import Profile from "./loginComponent/profile/Profile";
import { Backdrop, CircularProgress } from "@mui/material";
import ProfileSidebar from "./loginComponent/profile/profileSidebar";
import SearchedProduct from "./subComponent/Searched_product";
import { ProductDetail } from "./subComponent/ProductDetail";
import { fetch_allProduct } from "./Redux-toolkit/Features/FetchData";

function App() {
  const [Loading, setLoading] = useState(true);
  const [Auth, setAuth] = useState(false);
  const { auth } = useSelector((state) => state.isAuth);
  const { post } = useSelector((state) => state.addProduct);
  const { productDeleted } = useSelector((state) => state.DeleteProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_allProduct());
  }, [dispatch, post, productDeleted, Auth]);

  useEffect(() => {
    setAuth(auth);
    setLoading(false);
  }, [auth]);

  useEffect(() => {
    setLoading(true);
    try {
      setAuth(auth);

      fetch("http://localhost:8080/api/v1/is/auth", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`data success : ${data.success}`);
          setAuth(data.success);
          setLoading(false);
        })
        .catch((err) => console.log(err));

      console.log("rendering");
    } catch (err) {
      console.log(err);
    }
  }, [auth]);

  // */
  if (Loading)
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={Loading}
        />

        <div className=" flex justify-center align-middle  ">
          <CircularProgress color="inherit" />
        </div>
      </div>
    );

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={Auth ? <MainPage /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/signUp"
            element={Auth ? <Navigate to={"/"} /> : <SignUp />}
          />
          <Route
            path="/signIn"
            element={Auth ? <Navigate to={"/"} /> : <SignIn />}
          />
          <Route
            path="/home"
            element={Auth ? <MainPage /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/store"
            element={Auth ? <Store /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/search/:id"
            element={Auth ? <SearchedProduct /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/wishlist"
            element={Auth ? <WishList /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/cart"
            element={Auth ? <Cart /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/profile"
            element={Auth ? <ProfileSidebar /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/profile/user-info"
            element={Auth ? <Profile /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/profile/sell-product"
            element={Auth ? <AddProduct /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/product/:id"
            element={Auth ? <ProductDetail /> : <Navigate to={"/signIn"} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
