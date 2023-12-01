import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homePage/Homepage";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ForgetPasswordPhone from "./components/forgetPassword/ForgetPasswordPhone";
import ForgetPasswordOtp from "./components/forgetPassword/ForgetPasswordOtp";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Homepage/>} />
           <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password-phone" element={<ForgetPasswordPhone />} />
          <Route path="/reset-password-otp" element={<ForgetPasswordOtp />} />
          <Route path="/reset-password" element={<ForgetPassword />} />
          {/*<Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
