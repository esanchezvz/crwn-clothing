import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout-page.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripebutton.component';

let key = 0;

const CheckOutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>PRODUCT</span>
        </div>
        <div className='header-block'>
          <span>DESCRIPTION</span>
        </div>
        <div className='header-block'>
          <span>QUANTITY</span>
        </div>
        <div className='header-block'>
          <span>PRICE</span>
        </div>
        <div className='header-block'>
          <span>REMOVE</span>
        </div>
      </div>

      {cartItems.map(item => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div className='total'>
        <span>Total: ${totalPrice}.00</span>
      </div>
      <div className='test-warning'>
        *Please use the following test card for payments*
        <br />
        4242 4242 4242 4242 4242 - Exp: 06/25 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
