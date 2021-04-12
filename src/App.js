import "./App.css";
import DisplayCustomerDetails from './components/DisplayCustomerDetails';
import AddCustomer from './components/AddCustomer';
import GetCustomerDetails from './components/GetCustomerDetails';

function App() {

  let customer1 = {
    cname: "Tanisha",
    address: "102, Sector 56, Phase 6, Mohali, Punjab",
    age: 21,
  };
  // let customer2 = {
  //   cname: "Samar",
  //   address: "301, Sushma Apartments, Sector 17, Phase 9, Chandigarh",
  //   age: 26,
  // };
  // let customer3 = {
  //   cname: "Sujay",
  //   address: "548, ABC Heights, Airport Road, Daman, Daman and Diu",
  //   age: 24,
  // };
  // let customers = [customer1, customer2, customer3];

  return( 

      <div>
        {/* <DisplayCustomer customers = {customers} /> */}
        {/* <DisplayCustomerDetails customer = {customer1} /> */}
        {/* <GetCustomerDetails /> */}
        <AddCustomer />
      </div>

  );
}

export default App;
