import React, {Component} from 'react';
import {fetchCustomer} from '../service/CustomerService';
import DisplayCustomerDetails from './DisplayCustomerDetails';

class GetCustomerDetails extends Component{

    idRef = React.createRef();
    initialState = {id: -1, customer: undefined, errMsg: undefined}

    constructor(props){
        super(props);
        this.state = this.initialState;
    }

    submitHandler(event){
        event.preventDefault();
        console.log("Before making request");
        const promise = fetchCustomer(this.state.id);
        const successFun = (response) => {
            const customer = response.data;
            this.setState({...this.state, customer:customer, errMsg:undefined});
            console.log("Customer fetched", this.state.customer);
        };
        const errFun = (error) => {
            console.log("There was an error", error);
            this.setState({...this.state, customer:undefined, errMsg:error.response.data});
        };

        promise.then(successFun)
        .catch(errFun);
    }

    setIdHandler(){
        let idVal = this.idRef.current.value;
        this.setState({...this.state, id: idVal, customer:undefined, errMsg: undefined});
    }

    render(){
        return(
            <div>
                <h2><b>Get Customer Details</b></h2>
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <div>
                        <label>Enter id: </label>
                        <input name="id" type="number" ref={this.idRef} onChange={() => this.setIdHandler()} />
                    </div>
                    <button>Get Customer</button>
                </form>

                {this.state.customer ? (
                    <div>
                        <DisplayCustomerDetails customer = {this.state.customer} />
                    </div>
                ) : '' }

                {this.state.errMsg ? (
                    <div>
                        Request processing was not successful. Please try again. <br />
                        {this.state.errMsg}
                    </div>
                ) : '' }

            </div>
        );
    }
}

export default GetCustomerDetails;