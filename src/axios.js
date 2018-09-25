import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// we can also set up interceptors for this instance
// instance.interceptors.request...
// instance.interceptors.response...

export default instance;