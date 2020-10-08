import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./fpsshopRegSpec";
import Form from "./form";

class fpsshopReg extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  validateInput(inputs) {
    //Define Later
    console.log(inputs);
    if (inputs === {}) return "No Inputs found!!!";
    //Phone Number Validation
    var ph1 = inputs["Phone number 1"];
    var ph2 = inputs["Phone number 2"];
    console.log(ph1, ph2);
    if (ph1 === undefined || ph2 === undefined) return "Phone Number is null";
    if (ph1.length < 10 || ph2.length < 10) return "Phone Number is Incorrect";

    //name validation
    var fname = inputs["First Name"];
    var mname = inputs["Middle Name"];
    var lname = inputs["Last Name"];
    if (
      fname === undefined ||
      fname === "" ||
      mname === undefined ||
      mname === "" ||
      lname === undefined ||
      lname === ""
    )
      return "Name is null";

    //Address Validation
    var addr1 = inputs["Address Line 1"];
    var addr2 = inputs["Address Line 2"];
    var city = inputs["City/Town/Village"];
    var state = inputs["State"];
    var pincode = inputs["Pincode"];

    if (
      addr1 === undefined ||
      addr1 === "" ||
      addr2 === undefined ||
      addr2 === ""
    )
      return "Address is null";
    if (
      city === undefined ||
      city === "" ||
      state === undefined ||
      state === ""
    )
      return "City/State is null";
    if (pincode.length !== 6 || isNaN(pincode)) return "Incorrect Pincode";

    //Account details validation
    var accountNumber = inputs["Account number"];
    var ifscCode = inputs["IFSC code"];
    if (
      accountNumber === undefined ||
      accountNumber === "" ||
      ifscCode === undefined ||
      ifscCode === ""
    )
      return "Account Details is null";

    //ID validation
    var fpsid = inputs["FPS ID"];
    var ssid = inputs["SS ID"];
    var staffid = inputs["Staff ID"];
    if (
      fpsid === undefined ||
      fpsid === "" ||
      ssid === undefined ||
      ssid === "" ||
      staffid === undefined ||
      staffid === ""
    )
      return "ID is null";

    return "0";
  }
  insertIntoSQL(inputs, tablename) {}
  insertValues() {
    console.log(this.validateInput(this.state));
    //this.insertIntoSQL(this.state, this.newMethod());
  }
  newMethod() {
    return "Customer";
  }

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <Heading title="FPS Shop Registration" />
          {Object.keys(Fields).map((key) => {
            return (
              <Form
                fields={Fields[key]}
                onChangeHandler={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                  console.log(this.state);
                }}
              />
            );
          })}

          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.insertValues.bind(this)}
          >
            Submit
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default fpsshopReg;
