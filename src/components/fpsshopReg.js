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

    //Phone Number Validation
    var ph1 = inputs["Phone number 1"];
    var ph2 = inputs["Phone number 2"];
    if (ph1.length < 10 || ph2.length < 10) return "Phone Number is Incorrect";

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
