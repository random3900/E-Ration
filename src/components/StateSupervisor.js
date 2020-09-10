import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./StateSupervisorspec";
import Form from "./form";
function StateSupervisorReg(props) {
  return (
    <div>
      <Header />
      <div class="container">
        <Heading title="State Supervisor Registration" />
        <Form fields={Fields.nameFields}></Form>
        <Form fields={Fields.idField} />
        <Form fields={Fields.DateofBirthandAge} />
        <Form fields={Fields.DateofJoiningAndYearsOfService} />
        <Form fields={Fields.DesignationandSalaryField} />
        <Form fields={Fields.bankdetailsField} />

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default StateSupervisorReg;
