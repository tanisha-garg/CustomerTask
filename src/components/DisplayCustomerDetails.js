//import DisplayCustomer from './DisplayCustomer';

function DisplayCustomers({customer}){
    return(
        <div>
            <h2><b>Customer Details</b></h2>
            {/* <ul>
                {customers.map((customer, index) => 
                <li key={index}> <DisplayCustomer customer = {customer} /> </li>)}
            </ul> */}
            Id: {customer.id} <br />
            Name: {customer.cname} <br />
            Address: {customer.address} <br />
            Age: {customer.age} <br />

        </div>
    )
}

export default DisplayCustomers;