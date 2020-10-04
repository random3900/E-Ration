import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./customerRegSpec";
import Form from "./form";

class CustomerReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateInput(inputs) {
    //Define Later
    return true;
  }
  insertIntoSQL(inputs, tablename) {}
  insertValues() {
    if (this.validateInput(this.state))
      this.insertIntoSQL(this.state, "Customer");
  }
  render() {
    return (
      //Sample Comment
      <div>
        <Header />
        <h1>{this.state.username}</h1>
        <div class="container">
          <Heading title="Customer Registration" />
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

export default CustomerReg;
