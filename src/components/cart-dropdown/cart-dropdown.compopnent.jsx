import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton disabled={cartItems.length === 0}>
        {cartItems.length === 0 ? 'NO ITEMS YET' : 'GO TO CHECK OUT'}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('DROPDOWN STATE CALLED');
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
