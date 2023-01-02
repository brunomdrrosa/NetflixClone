import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GlobalStyles } from './globalStyles';
import { firebase } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
