import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./transactionspec";
import Form from "./form";
class transactions extends React.Component {
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
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
        </div>
        <div class="row">
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
        </div>
        <div class="row">
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
        </div>
        <div class="row">
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
        </div>
        <div class="row">
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
        </div>
        <div class="row">
          <div class="col"> fps_ID</div>
          <div class="col"> Transaction ID</div>
          <div class="col"> Transaction Amount</div>
          <div class="col"> Customer AcNo</div>
          <div class="col"> Customer IFSC Code</div>
          <div class="col"> Debit </div>
          <div class="col"> Credit </div>
          <div class="col"> Payer</div>
          <div class="col"> Payee </div>
          <div class="col"> Balance</div>
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
          <Heading title="Transaction Details" />
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

export default transactions;
