import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./logoftripsSpec";
import Form from "./form";
function logoftrips(props) {
  return (
    <div>
      <Header />
      <div class="container">
        <Heading title="Log of trips" />
        <Form fields={Fields.dateField} />
        <Form fields={Fields.idField} />
        <Form fields={Fields.nameFields}></Form>
        <Form fields={Fields.phonenumberField} />
        <Form fields={Fields.routesandstopsandloadField} />
        <Form fields={Fields.costField} />

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default logoftrips;
