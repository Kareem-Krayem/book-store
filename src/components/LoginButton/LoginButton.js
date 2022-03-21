import React from 'react';
import './LoginButton.scss';

function LoginButton({ title }) {
  return <button className='loginBtn'>{title}</button>;
}

export default LoginButton;
