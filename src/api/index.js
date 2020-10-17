import axios from 'axios';

const request = axios.create({
    baseURL: "http://localhost:4000"
});

const apis = {
    addUser: (inputName, inputEmail) => request.post('/user', {
        name: inputName,
        email: inputEmail
    }),
}

export default apis;