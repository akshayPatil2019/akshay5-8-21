import React from 'react';
import { Component } from 'react';  

// import Header from './component/Header'

class Header extends Component {

    render(){
        return (
            <div className="row header">
                <div className="col-8">
                <h1>Billing address</h1>
                </div>
                <div className="col-3">
                    <h1>Your Cart</h1>
                </div>
                <div className="col-1 badge">
                    3
                </div>
            </div>
            
        )
    }
}


export default Header;