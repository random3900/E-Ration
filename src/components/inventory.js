import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./inventorspec.js";
import Form from "./form";
class inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: <div> </div>
    };
  }
  columnss = (event) => {
    let sample = (
      <div>
        <div class="row">
          <div class="col"> | Item ID | </div>
          <div class="col"> | Unit of Measurement | </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
        <div class="row">
          <div class="col"> | Item ID | </div>
          <div class="col"> | Unit of Measurement | </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
        <div class="row">
          <div class="col"> Item ID </div>
          <div class="col"> Unit of Measurement </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
        <div class="row">
          <div class="col"> Item ID </div>
          <div class="col"> Unit of Measurement </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
        <div class="row">
          <div class="col"> Item ID </div>
          <div class="col"> Unit of Measurement </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
        <div class="row">
          <div class="col"> Item ID </div>
          <div class="col"> Unit of Measurement </div>
          <div class="col"> fps_id </div>
          <div class="col"> Item Name </div>
          <div class="col"> Item Remaining </div>
        </div>
      </div>
    );
    this.setState({ table: sample });
  };
  render() {
    return (
      //Sample Comment
      <div>
        <Header />
        <div class="container">
          <Heading title="Inventory Details" />
          <Form fields={Fields.dateFields}></Form>
          <button type="submit" onClick={this.columnss} class="btn btn-primary">
            Submit
          </button>
          {this.state.table}
        </div>
        <Footer />
      </div>
    );
  }
}

// function inventory(props) {
//   return (
//     //Sample Comment
//     <div>
//       <Header />
//       <div class="container">
//         <Heading title="Inventory Details" />
//         <Form fields={Fields.dateFields}></Form>
//         <button type="submit" onClick={columnss()} class="btn btn-primary">
//           Submit
//         </button>
//         {this.state.table}
//       </div>
//       <Footer />
//     </div>
//   );
// }

export default inventory;
