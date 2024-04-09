import axios from 'axios';
import { PersonEntry } from '../types/phonebookTypes';
// const baseUrl = 'http://localhost:3000/people';
// const baseUrl = 'http://001.fly.dev/people';
const baseUrl = '/people';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject: PersonEntry) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id: number, newObject: PersonEntry) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id: number) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response);
};

export default { getAll, create, update, remove };
