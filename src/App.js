// import logo from './logo.svg';
import React, { Component, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Billing from './views/Billing/Billing';
import Cart from './views/Cart/Cart';
import Header from './views/Header/Header';

import { Route, Switch} from 'react-router-dom';
import './App.css';

// const App = () =>{
  class App extends Component {
    // export const App =()  => {
  render() {
    // let routes = (
    // <Switch>
    //     <Redirect to="/" />
    //       <Route path="/Header" component={Header} />
    //      <Route path="/Billing" exact component={Billing} />
    //     <Route path="/Cart" exact component={Cart} />
    //   </Switch>
    // // );
    
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route path="/Billng">
            <Billing />
            {/* <Cart /> */}
          {/* <Route exact path="/Billing" component={Billing}  />
          <Route exact path ="/Cart" component={Cart}  /> */}
          {/* <Route component={ErrorPage} /> */}
        </Route>
        </Switch>
      </div>
      // <div className="App">
      //   {routes}
      //   <Billing />
      // </div>
    );
  }
}

export default App;
