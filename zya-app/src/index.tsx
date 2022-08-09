import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import {io} from 'socket.io-client';

const oscConfig = {
  server: {
    port: 9000,
    host: '127.0.0.1'
  },
  client: {
    port: 9001,
    host: '127.0.0.1'
  }
};

const socket = io('http://127.0.0.1:8081');

socket.on('connect', function() {
  socket.emit('config', oscConfig);
});

socket.on('message', function(obj) {
  const status = document.querySelector('header__file-name');
  if (status) {
    status.innerHTML = obj[0];
  }
  console.log(obj);
});

export {socket};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
