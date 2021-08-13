import React, { Component } from "react";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button } from 'react-bootstrap';
// import { Component } from 'react';
import Cart from "../../views/Cart/Cart";
import Header from "../../views/Header/Header";
// import { withRouter } from 'react-router-dom'

// const history = useHistory();

// const Billing = (props) => {

class Billing extends Component {

  // redirectToHome = () => {
  //   const { history } = this.props;
  //   if (history) history.push('/billing');
  //   console.log(history)
  // }
                                              
  nextPath(Billing) {
    this.props.history.push('/Billing');
  }

  constructor(props) {
    super(props)
    this.state = {
      // location: '',
      firstName: '',
      lastName: '',
      userName: "",
      email: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      zip: '',
      shipping: 'false',
      save: 'false',
      payment: '',
      cardname: '',
      cardnumber: '',
      expiration: '',
      cvv: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log(" Usre Data is", data)
  }


  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }



  render() {
    const { history } = this.props;
    let {location} = this.props;
    console.log(history)

    const style = {
      color: 'green',

     
    };
    return (
      // (history)
      // ?

      <Container>
        <form onSubmit={this.handleSubmit}>
          <Header />
          <button className="btn btn-primary">GO Back</button>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {/* <h3><label className="text-start">Billing address</label></h3> */}

                <div className="col-6">
                  <h4><label className="text-start">First name</label></h4>
                  <input
                    id="firstname"
                    className="form-control"
                    type="text"
                    placeholder="firstName"
                    value={this.state.firstName} name="firstName"
                    onChange={this.handleChange} />
                </div>

                <div className="col-6">
                  <h4><label className="text-start">Last name</label></h4>
                  <input
                    id="lastname"
                    className="form-control"
                    type="text"
                    placeholder="lastName"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleChange} />
                </div>


                {/* <div className="row">

                  {/* <h3 className="text-start">Billing address {}</h3> */}

                {/* </div> */}

                <div className="row">
                  <div className="col-12">
                    <h4><label className="text-start">Username</label></h4>
                    <div className="input-group">
                      <span className="input-group-text">@</span>
                      <input id="uname"
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        valeu={this.state.userName}
                        name="userName"
                        onChange={this.handleChange} />
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-12">
                    <h4><label className="text-start">Email (Optional)</label></h4>
                    <input
                      id="email"
                      className="form-control"
                      type="text"
                      placeholder="you@example.com"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h4> <label className="text-start">Address</label></h4>
                    <input
                      id="email"
                      className="form-control"
                      type="text"
                      placeholder="1234 Main St"
                      name="address1" value={this.state.address1}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h4> <label className="text-start">Address 2 (Optinal)</label></h4>
                    <input
                      id="emaail"
                      className="form-control"
                      type="text"
                      placeholder="Apartment or suite"
                      name="address2"
                      value={this.state.address2}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <h4> <label className="text-start">Country</label></h4>
                    <select
                      id="country"
                      class="form-control"
                      name="country"
                      value={this.state.country}
                      onChange={this.handleChange} >

                      <option>choose...</option>
                      <option value="india">India</option>
                      <option value="USA">USA</option>
                      <option value="Spain">Spain</option>
                    </select>
                  </div>

                  <div className="col-4">
                    <h4> <label className="text-start">State</label></h4>
                    <select
                      id="state"
                      class="form-control"
                      name="state"
                      value={this.state.state}
                      onChange={this.state.handleChange}>
                      <option value="">Choose...</option>
                      <option value="Kar">Karnataka</option>
                      <option value="Mh">Maharastra</option>
                      <option value="Guj">Gujrat</option>
                    </select>
                  </div>

                  <div className="col-3">
                    <h4> <label className="text-start">Zip</label></h4>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      value={this.state.zip}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div class="col-12">
                  <hr className="text-start" />
                </div>


                <div className="row">
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="shipping"
                        checked={this.state.shipping}
                        // value={"some default value"}
                        onChange={this.handleChange} />
                      <span>Shipping address is the same as my billing address</span>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="save"
                        checked={this.state.save}
                        onChange={this.handleChange} />
                      <span>Save this information for next time</span>
                      {/* <label for="saveaddress" className="text-start1">Save this information for next time</label> */}
                    </div>
                  </div>
                </div>


                <div class="col-12">
                  <hr className="text-start" />
                </div>


                <div className="row">
                  <h4 className="text-start">Payment</h4>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        // id="creditCard"
                        type="radio"
                        name="payment"
                        value="credit"
                        checked={this.state.payment === 'credit'}
                        onChange={this.handleChange}
                        className="form-check-input" />
                      <span for="creditCard" className="text-start1">Credit Card</span>
                    </div>

                    <div className="form-check">
                      <input id="debitcard"
                        type="radio"
                        name="payment"
                        value="debit"
                        checked={this.state.payment === 'debit'}
                        onChange={this.handleChange}
                        className="form-check-input" />
                      <span for="debitcard" className="text-start1">Debit Card</span>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={this.state.payment === 'paypal'}
                        onChange={this.handleChange}
                        className="form-check-input" />
                      <span for="paypal" className="text-start1">Paypal</span>
                    </div>
                  </div>
                </div>


                <div className="row card-name">
                  <div className="col-6">
                    <h5> <span className="text-start">Name on card</span></h5>
                    <input
                      type="text"
                      className="form-control"
                      name="cardname"
                      value={this.state.cardname}
                      onChange={this.handleChange} />
                    <h5 className="text-muted">Full name as displayed on card</h5>
                  </div>

                  <div className="col-6">
                    <h5> <span className="text-start">Credit card Number </span></h5>
                    <input
                      type="text"
                      className="form-control"
                      name="cardnumber"
                      value={this.state.cardnumber}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h5 className="text-start">Expiration</h5>
                    <input
                      type="text"
                      id="expiration"
                      className="form-control"
                      name="expiration"
                      value={this.state.expiration}
                      onChange={this.handleChange} />
                  </div>

                  <div className="col-3">
                    <h5 className="text-start">CVV</h5>
                    <input type="text"
                      id="cvv"
                      className="form-control"
                      name="cvv"
                      value={this.state.cvv}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div class="col-12">
                  <hr className="text-start" />
                </div>

                <div className="row">
                  <div className="col-12">
                    <button onClick={() => this.props.history.push('/Billing') } type="submit" className="btn btn-primary btn-lg btn-block">Click Event</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <Cart />
            </div>
          </div>
        </form>
      </Container >
    )
  }
}
export default Billing;

