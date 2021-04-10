function DisplayCustomer({ customer }) {
  return (
    <span>
      <b>Name:</b> {customer.cname} <b>Address:</b> {customer.address} <b>Age:</b> {customer.age}
    </span>
  );
}

export default DisplayCustomer;
