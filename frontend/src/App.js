import { Navbar } from "./subComponent/Navbar";
import "@fontsource/poppins";
import "./app.css";
import SignIn from "./loginComponent/Login";
import SignUp from "./loginComponent/Signup";
import Footer from "./subComponent/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./mainComponent/MainPage";
import Store from "./mainComponent/Store";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  if (!isAuth) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
