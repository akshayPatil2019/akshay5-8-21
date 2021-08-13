import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Container, Row, Col, Button, color } from 'react-bootstrap';

const style = {
    color: "green"
    // backgroundcolo:'red'
}

class Cart extends Component {
    

    render() {

        return (

            <div className="row">

                {/* <div className="col-7">
                        <h3 className="text-start">Your cart</h3>
                    </div>
                    <div className="col-5">
                        <h3 className="badge badge-black">3</h3>
                    </div>
                 </div>  */}

                {/* <div className="row"> */}
                <div className="card">
                    <div className="col-8">
                        <span className="align">Product Name</span> <br />
                        <small className="text-muted">Brief description</small>
                    </div>
                    <div className="col-4">
                        {/* <h4 className="alignright">$12</h4> */}
                    </div>
                </div> <br />

                {/* <div className="row"> */}
                <div className="card">
                    <div className="col-8">
                        <span className="align">Second Product</span><br />
                        <small className="text-muted">Brief description</small>
                    </div>
                    <div className="col-4">
                        {/* <h4 className="alignright">$8</h4> */}
                    </div>
                </div>
                {/* </div> */}


                {/* <div className="row"> */}
                <div className="card">
                    <div className="col-8">
                        <span className="align">Third Item</span><br />
                        <small className="text-muted">Brief description</small>
                    </div>
                    <div className="col-4">
                        {/* <h4 className="alignright">$5</h4> */}
                    </div>
                </div>
                {/* </div> */}

                {/* <div> */}
                <div className="card">
                    <div className="col-8">
                        <span style={style} className="align">Promo code</span><br />
                        <small style={style} className="text-muted">Brief description</small>
                    </div>
                    <div className="col-4">
                        {/* <h4 className="alignright">-$5</h4> */}
                    </div>
                </div>
                {/* </div> */}


                <div className="card">
                    <div className="col-8">
                        <h5 className="align">Total USD</h5>

                    </div>
                    <div className="col-4">
                        {/* <h4 className="alignright">$20</h4> */}
                    </div>
                </div>


                <div className="card promo">
                    <div className="input-group input">
                        <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark" type="button">Redeem</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Cart;