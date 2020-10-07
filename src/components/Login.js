import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Form from "./form";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  checkCredentials() {
    // console.log(this.state);
    // if (
    //   this.state["Username"].equals("admin") &&
    //   this.state["password"].equals("admin")
    // )
    // console.log("Matching");
    return true;
  }
  render() {
    var Fields = [
      {
        name: "Username",
        type: "text"
      },
      {
        name: "Password",
        type: "password"
      }
    ];
    return (
      <div>
        <Header />
        <div class="container">
          <Heading title="Login" />
          <Form
            fields={Fields}
            onChangeHandler={(event) => {
              this.setState({ [event.target.name]: event.target.value });
              console.log(this.state);
            }}
          />
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.checkCredentials.bind(this)}
          >
            Submit
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
