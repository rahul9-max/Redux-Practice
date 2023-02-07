import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import Store from './components/Store';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
// import raajReducer from './Userslice'
import demoReducer from './components/Userslice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
    user:demoReducer
  }
})
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();