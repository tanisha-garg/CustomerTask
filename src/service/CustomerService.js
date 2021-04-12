import axios from 'axios';

const baseUrl = 'http://localhost:8585';

function fetchCustomer(id){
    const url = baseUrl + "customers/byid/" + id;
    const promise = axios.get(url);
    return promise;
}

function addCustomer(data){
    const url = baseUrl + "customers/add";
    const requestData = {name:data.cname, address:data.address, age: data.age};
    const promise = axios.post(url, requestData);
    return promise;
}

export {fetchCustomer, addCustomer};

