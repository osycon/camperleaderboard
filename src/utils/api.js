import axios from 'axios';

export default function fetchData(url) {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => console.error(err));
}
