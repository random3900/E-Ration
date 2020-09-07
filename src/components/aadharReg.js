import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./aadharRegSpec";
import Form from "./form";
function aadharReg(props) {
  return (
    //Sample Comment
    <div>
      <Header />
      <div class="container">
        <Heading title="Aadhar Registration" />
        <Form fields={Fields.nameFields}></Form>
        <Form fields={Fields.FathernameFields} />
        <Form fields={Fields.AadharNumberFields} />
        <Form fields={Fields.addrFields} />
        <Form fields={Fields.dateofbirthFields} />
        <Form fields={Fields.phonenumberFields} />
        <Form fields={Fields.GenderFields} />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default aadharReg;
