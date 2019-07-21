import React from 'react';

import './sign-in-page.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SginInPage = () => {
  return (
    <div className='sign-in-page'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SginInPage;
