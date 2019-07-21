import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import './cart-dropdown.scss';
import React from 'react';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
