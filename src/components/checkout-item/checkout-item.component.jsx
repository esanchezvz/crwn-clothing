import React from 'react';

import './checkout-item.scss';

const CheckOutItem = ({ item }) => {
  console.log(item);
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
