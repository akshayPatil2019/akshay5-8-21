// import logo from './logo.svg';

import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import Billing from './component/Billing';
import Cart from './component/Cart';
import Payment from './component/Payment';

import './App.css';

function App() {
  
  return (
    <div className="App">
    <header className="App-Header">
      <Billing />
      <Cart />
      <Payment />
      </header>
    </div>
    
    
  );
}

export default App;
