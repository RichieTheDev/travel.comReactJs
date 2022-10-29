import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Faqs from "./Pages/Faqs";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
