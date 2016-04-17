import axios from 'axios';

export const getUsers = () => {
  return axios.get('http://jsonplaceholder.typicode.com/users');
};
