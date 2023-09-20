import React from "react"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./components/Page/AboutUs/About"
import Home from "./components/Page/Home/Home"
import Login from "./components/Page/Login/Login"
import SignUp from "./components/Page/SignUp/SignUp"
import ForgotPassword from "./components/Page/ForgotPassword/ForgotPassword"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
