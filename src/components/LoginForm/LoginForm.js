import React from 'react';
import './LoginForm.scss';

import LoginButton from '../LoginButton/LoginButton';

function LoginForm() {
  return (
    <div className='loginForm'>
      <h3>LOGIN FORM</h3>
      <LoginButton title='Login' />
      <br />
      <LoginButton title='Sign Up' />
    </div>
  );
}

export default LoginForm;
