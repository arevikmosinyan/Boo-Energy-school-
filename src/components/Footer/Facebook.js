import React from 'react';
import fb from '../../icons/facebook.png';
const Facebook = (props) => {
  return (
    <div>
      <img src={fb} alt='facebook' className={props.className} />
    </div>
  );
};

export default Facebook;
