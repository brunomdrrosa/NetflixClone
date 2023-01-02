import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GlobalStyles } from './globalStyles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
