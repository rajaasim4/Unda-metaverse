import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import LandingPage from "../Pages/Landing/Landing";
import SignIn from "../Pages/SignIn/SingIn";
import SignUp from "../Pages/SignUp/SignUp";
import Work from "../Pages/Work/Work";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
  );
};

export default Router;
