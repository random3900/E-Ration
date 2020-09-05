import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./fpsshopRegSpec";
import Form from "./form";
function fpsshopReg(props) {
  return (
    <div>
      <Header />
      <div class="container">
        <Heading title="FPS Shop Registration" />
        <Form fields={Fields.nameFields}></Form>
        <Form fields={Fields.addrFields1} />
        <Form fields={Fields.addrFields2} />
        <Form fields={Fields.timeField} />
        <Form fields={Fields.noofcustomersField} />
        <Form fields={Fields.phonenumberField} />
        <Form fields={Fields.bankdetailsField} />
        <Form fields={Fields.idField} />

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default fpsshopReg;
