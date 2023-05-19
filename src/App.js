import React from "react";

import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AddEditUsers from "./pages/AddEditUsers";
import UserInfo from "./pages/UserInfo";
import About from "./pages/About";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddEditUsers />} />
        <Route path="/editUser/:id" element={<AddEditUsers />} />
        <Route path="/userInfo/:id" element={<UserInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
