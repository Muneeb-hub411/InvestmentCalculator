import React from "react";
import investmentLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div id="header">
      <img src={investmentLogo} alt="" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
