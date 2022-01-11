import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Add from "./Add";


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Add />
  </React.StrictMode>,
  document.getElementById('root')
);

