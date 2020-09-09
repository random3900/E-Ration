import React from "react";

import Header from "./header";
import Footer from "./footer";
import MenuIcon from "./menuIcon";
function Menu(props) {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col">
          <MenuIcon item="Customer" />
        </div>
        <div className="col">
          <MenuIcon item="FPSShop" />
        </div>
        <div className="col">
          <MenuIcon item="FPSStaff" />
        </div>
        <div className="col">
          <MenuIcon item="Aadhar" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MenuIcon item="Inventory" />
        </div>
        <div className="col">
          <MenuIcon item="Trips" />
        </div>
        <div className="col">
          <MenuIcon item="Transactions" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
