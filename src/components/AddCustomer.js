import React, { Component } from "react";

class AddCustomer extends Component {

  cnameRef = React.createRef();
  addressRef = React.createRef();
  ageRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = { cname: "", address: "", age: 0, formStatus: '' };
  }

  setCustomerName(){
      const field = this.cnameRef.current;
      let cnameVal = field.value;
      this.setState({...this.state, cname: cnameVal});
  }

  setAddress(){
      const field = this.addressRef.current;
      let addressVal = field.value;
      this.setState({...this.state, address: addressVal});
  }

  setAge(){
      const field = this.ageRef.current;
      let ageVal = field.value;
      this.setState({...this.state, age: ageVal});
  }

  submitHandler = (event) => {
      event.preventDefault();
      this.setState({...this.state, formStatus: "Customer Details sent successfully"});
  }

  render() {
    return (
      <div>
        <h2>
          <b>Add Customer Form</b>
        </h2>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <div>
            <label>CName: </label>
            <input
              type="text"
              name="cname"
              ref={this.cnameRef}
              onChange={() => this.setCustomerName()}
            />
          </div>

          <div>
            <label>Address: </label>
            <textarea
              name="address"
              ref={this.addressRef}
              onChange={() => this.setAddress()}
            />
          </div>

          <div>
            <label>Age: </label>
            <input
              type="number"
              name="age"
              ref={this.ageRef}
              onChange={() => this.setAge()}
            />
          </div>

          <button>Submit</button>

        </form>

        <div>
            <h2><b>Details Entered</b></h2>
            Name: {this.state.cname} <br />
            Address: {this.state.address} <br />
            Age: {this.state.age}<br />
            Form Status: {this.state.formStatus}
        </div>

      </div>
    );
  }
}

export default AddCustomer;
