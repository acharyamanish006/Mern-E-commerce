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
import { useDispatch, useSelector } from "react-redux";
import { is_auth } from "./Redux-toolkit/Features/isAuth";
// import { Profile } from "./loginComponent/Profile";
import AddProduct from "./loginComponent/profile/AddProduct";

import Profile from "./loginComponent/profile/Profile";

function App() {
  const [loading, setLoading] = useState(true);
  const [Auth, setAuth] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/is/auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.success);
        setAuth(data.success);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [Auth]);

  if (loading) return <h1>loading</h1>;

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
            path="/home"
            element={Auth ? <MainPage /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/store"
            element={Auth ? <Store /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/signUp"
            element={!Auth ? <SignUp /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signUp"
            element={Auth ? <Navigate to={"/"} /> : <SignUp />}
          />
          <Route
            path="/signIn"
            element={!Auth ? <SignIn /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signIn"
            element={Auth ? <Navigate to={"/"} /> : <SignIn />}
          />
          <Route
            path="/profile"
            element={Auth ? <Profile /> : <Navigate to={"/signIn"} />}
          />
          <Route
            path="/sell-product"
            element={Auth ? <AddProduct /> : <Navigate to={"/signIn"} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

  /*
  if (!Auth) {
    return (
      <div className="App ">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );*/
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sell-product" element={<AddProduct />} />
          <Route path="/" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
