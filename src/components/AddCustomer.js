import React, { Component } from "react";
import {addCustomer} from '../service/CustomerService';
import DisplayCustomerDetails from './DisplayCustomerDetails';

class AddCustomer extends Component {

  cnameRef = React.createRef();
  addressRef = React.createRef();
  ageRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = { cname: undefined, address: undefined, age: undefined, errMsg: undefined, customer:undefined };
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
      let formData = {...this.state};
      const successFun=(response)=>{
        console.log("inside success function", response);
        this.setState({...this.state, customer:response.data});
      };
      const errFun=(error)=>{
        console.log("inside errFun", error);
        this.setState({...this.state, errMsg:error.response.data});
      }
      const promise = addCustomer(formData);
      promise.then(successFun)
      .catch(errFun);
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

        {this.state.customer ? (
          <div>
            <h2>Customer successfully created</h2>
            <DisplayCustomerDetails customer = {this.state.customer} />
          </div>
        ) : "" }

        {this.state.errMsg ? (
          <div>
            Request was not successful. <br />
            {this.state.errMsg}
          </div>
        ) : "" }

        {/* <div>
            <h2><b>Details Entered</b></h2>
            Name: {this.state.cname} <br />
            Address: {this.state.address} <br />
            Age: {this.state.age}<br />
            Form Status: {this.state.formStatus}
        </div> */}

      </div>
    );
  }
}

export default AddCustomer;
