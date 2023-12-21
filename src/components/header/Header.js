import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;