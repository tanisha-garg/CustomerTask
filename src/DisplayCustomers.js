import DisplayCustomer from './DisplayCustomer';

function DisplayCustomers({customers}){
    return(
        <div>
            <h2><b>Customer Details</b></h2>
            <ul>
                {customers.map((customer, index) => 
                <li key={index}> <DisplayCustomer customer = {customer} /> </li>)}
            </ul>
        </div>
    )
}

export default DisplayCustomers;