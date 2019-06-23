import axios from 'axios';
import { store, dispatch } from 'store';

import { API_ENDPOINT } from 'config';

// Set common endpoint configuration
export const client = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json'
});

// Set an interceptor to set JWT
client.interceptors.request.use(config => {
  const {
    auth: { token }
  } = store.getState();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle 401 responses
client.interceptors.response.use( (response) => {
  return response.data
}, (error) => { 
  // error.response is undefined in case of POST and 401 response
  // only get a Network Error 
  if (error.response.status === 401) { 
    dispatch.auth.logoutUser(null);
  }
  return Promise.reject(error.response)
})

export function login(data: { email: string; password: string }) {
  return client({
    method: 'post',
    url: '/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      email: data.email,
      password: data.password
    })
  });
}

export function getSheeps() {
  return client({
    method: 'get',
    url: '/sheeps',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}