import React from "react";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button } from 'react-bootstrap';

const Billing = (props) => {
  const style = {
    color: 'green',
  };
  return (

    <Container>
      <div className="col-8">
        <div className="row">
          <form>
            <div className="row">
              <h3 className="text-start">Billing address</h3>
              <div className="col-sm-6">
                <h5> <label className="text-start">Firstname</label></h5>
                <input id="firstName" className="form-control" type="text" placeholder="firstName" />
              </div>
              <div className="col-sm-6">
                <h5> <label className="text-start">LastName</label></h5>
                <input id="lastname" className="form-control" type="text" placeholder="lastName" />
              </div>
              <div className="#">
                <h5> <label className="text-start">UserName</label></h5>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input id="uname" className="form-control" type="text" placeholder="UserName" />
                </div>
              </div>
              <div className="#">
                <h5> <label className="text-start">Email</label></h5>
                <input id="emaail" className="form-control" type="text" placeholder="you@example.com" />
              </div>
              <div className="col-12">
                <h5> <label className="text-start">Address1</label></h5>
                <input id="emaail" className="form-control" type="text" placeholder="1234 Main St" />
              </div>
              <div className="#">
                <h5> <label className="text-start">Address2 (Optinal)</label></h5>
                <input id="emaail" className="form-control" type="text" placeholder="Apartment or suite" />
              </div>

              <div className="col-md-5">
                <h5> <label className="text-start">Country</label></h5>
                <select id="userName" class="form-control">
                  <option value="">choose...</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Spain">Spain</option>
                </select>
              </div>
              <div className="col-md-4">
                <h5> <label className="text-start">State</label></h5>
                <select id="state" class="form-control">
                  <option value="">choose...</option>
                  <option value="Kar">Karnataka</option>
                  <option value="Mh">Maharastra</option>
                  <option value="Guj">Gujrat</option>
                </select>
              </div>
              <div className="col-md-3">
                <h5> <label className="text-start">Zip</label></h5>
                <input type="text" className="form-control" />
              </div>

              <div class="#">
                <hr className="text-start" />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input type="checkbox" className="from-check-input" />
                  <label for="saveaddress" className="text-start1">Shipping address is the same as my billing address</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="from-check-input" />
                  <label for="saveaddress" className="text-start1">Save this information for next time</label>
                </div>
              </div>

              <div class="#">
                <hr className="text-start" />
              </div>
              <h4 className="text-start">Payment</h4>
              <div className="col-12">
                <div className="form-check">
                  <input id="creditCard" type="radio" name="paymentMethod" className="form-check-input" />
                  <label for="creditCard" className="text-start1">Credit Card</label>
                </div>
                <div className="form-check">
                  <input id="debitcard" type="radio" name="paymentMethod" className="form-check-input" />
                  <label for="debitcard" className="text-start1">Debit Card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" type="radio" name="paymentMethod" className="form-check-input" />
                  <label for="paypal" className="text-start1">Paypal</label>
                </div>
              </div>

              <div className="row my-3 gy-3">
                <div className="col-md-6">
                  <h5 className="text-start">Name on card</h5>
                  <input type="text" className="form-control" />
                  <h5 className="text-muted">Full name as displayed on card</h5>
                </div>
                <div className="col-md-6">
                  <h5 className="text-start">Credit card Number</h5>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <h5 className="text-start">Expiration</h5>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                  <h5 className="text-start">CVV</h5>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div class="#">
                <hr className="text-start" />
              </div>


              <div className="row">
                <div className="col-12">
                  <Button className="btn btn-primary btn-lg btn-block">Continue to Checkout</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="col-4">
        <div className="row">

          <div className="col-5">
            <h3 className="text-start">Your cart</h3>
          </div>
          <div className="col-7">
            <h3 className="badge badge-black">3</h3>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <div className="col-5">
              <h5 className="align">Product Name</h5>
              <small className="text-muted">Brief description</small>
            </div>
            <div className="col-7">
              <h4 className="alignright">$12</h4>
            </div>
          </div>

          <div className="card">
            <div className="col-5">
              <h5 className="align">Second Product</h5>
              <small className="text-muted">Brief description</small>
            </div>
            <div className="col-7">
              <h4 className="alignright">$8</h4>
            </div>
          </div>

          <div className="card">
            <div className="col-5">
              <h5 className="align">Third Item</h5>
              <small className="text-muted">Brief description</small>
            </div>
            <div className="col-7">
              <h4 className="alignright">$5</h4>
            </div>
          </div>

          <div className="card">
            <div className="col-5">
              <h5 className="align">Promo code</h5>
              <small className="text-muted">Brief description</small>
            </div>
            <div className="col-7">
              <h4 className="alignright">-$5</h4>
            </div>
          </div>

          <div className="card">
            <div className="col-5">
              <h5 className="align">Total USD</h5>
              {/* <small className="text-muted">Brief description</small> */}
            </div>
            <div className="col-7">
              <h4 className="alignright">$20</h4>
            </div>
          </div>

          <div className="input-group input">
            <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <Button className="btn btn-outline-dark" type="button">Button</Button>
            </div>
          </div>


          {/* <div className="col-7">
            <h5> Second Product</h5>
            <small className="text-muted">Brief description</small>
          </div>
          <div className="col-5">
            $8
              </div>
          <div class="col-#">
            <hr className="text-start" />
          </div>

          <div className="col-7">
            <h5>Third Item</h5>
            <small className="text-muted">Brief description</small>
          </div>
          <div className="col-5">
            $5
              </div>

          <div class="col-#">
            <hr className="text-start" />
          </div>

          <div className="col-7">
            <h5 style={style}>Promo code</h5>
            <small style={style}>Brief description</small>
          </div>
          <div style={style} className="col-5">
            -$5
              </div>

          <div class="col-#">
            <hr className="text-start" />
          </div>
          <div className="col-7">
            <h5>Total USD</h5>
            {/* <small className="text-muted">Brief description</small> */}
          {/* </div> */}
          {/* <div className="col-5">
          $20
              </div>
        <div class="col-#">
          <hr className="text-start" />
        </div> */}
        </div>
      </div>
      <div>
      </div>
    </Container >
  )
}

export default Billing

