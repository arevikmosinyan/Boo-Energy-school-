import React from 'react';
import email from '../../icons/email.png';
const Email = (props) => {
  return (
    <div>
      <img src={email} alt='email' className={props.className} />
    </div>
  );
};

export default Email;
