import React from 'react';
import instagram from '../../icons/instagram.png';

const Instagram = (props) => {
  return (
    <div>
      <img src={instagram} className={props.className} alt='instagram' />
    </div>
  );
};

export default Instagram;
