import React from "react";

import Header from "./header";
import Footer from "./footer";
import MenuIcon from "./menuIcon";
import CustomerReg from "./customerReg";
import FpsShopReg from "./fpsshopReg";
import FpsStaffReg from "./fpsstaffReg";
import AadharReg from "./aadharReg";
import Inventory from "./inventory";
import Accounts from "./transactions";
import LogOfTrips from "./logoftrips";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <main>
          <div>
            <Header />

            <div className="row">
              <div className="col">
                <Link to="/customer" replace>
                  <MenuIcon item="Customer" />
                </Link>
              </div>
              <div className="col">
                <Link to="/fpsshop">
                  <MenuIcon item="FPSShop" />
                </Link>
              </div>
              <div className="col">
                <Link to="/fpsstaff">
                  <MenuIcon item="FPSStaff" />
                </Link>
              </div>
              <div className="col">
                <Link to="/aadhar">
                  <MenuIcon item="Aadhar" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/inventory">
                  <MenuIcon item="Inventory" />
                </Link>
              </div>
              <div className="col">
                <Link to="/trips">
                  <MenuIcon item="Trips" />
                </Link>
              </div>
              <div className="col">
                <Link to="/transactions">
                  <MenuIcon item="Transactions" />
                </Link>
              </div>
            </div>
            <Footer />
          </div>
          <Switch>
            <Route path="/customer" component={CustomerReg} />
            <Route path="/fpsshop" component={FpsShopReg} />
            <Route path="/fpsstaff" component={FpsStaffReg} />
            <Route path="/aadhar" component={AadharReg} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/trips" component={LogOfTrips} />
            <Route path="/transactions" component={Accounts} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Menu;
