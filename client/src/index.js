import React from 'react';
import { hydrate, render } from "react-dom";
 

import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './redux/store'
import { HelmetProvider } from 'react-helmet-async';

const APP = (
  <HelmetProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </HelmetProvider>
)
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
