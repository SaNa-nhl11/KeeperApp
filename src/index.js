import React from 'react';      
import ReactDOM from 'react-dom/client';
import App from './components/app';

//The linkage between index.html and index.js is established through the specification of the id attribute (‘root’)//
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
   <App></App>
);


