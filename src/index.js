import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Pages,
  Sportpress,
  Shop,
  Blog,
  Login,
  Item,
  Pagle,
  
} from "./Components";


ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/Sportpress" element={<Sportpress />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Item" element={<Item />} />
      <Route path="/Pagle" element={<Pagle />} />
      {/* <Route path="/Sidebar" element={<Sidebar />} /> */}
    </Routes>
    <Footer />
  </Router>,




  document.getElementById("root")
);
