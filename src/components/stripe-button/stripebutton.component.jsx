import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey = 'pk_test_ZNd2Ulqid7lQyoPVbxDCdS7b00jwEMhZZv';

  const onToken = token => {
    console.log(token);
    alert('Payment succesful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN CLOTHING'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}.00 USD`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publichableKey}
    />
  );
};

export default StripeCheckoutButton;
