import React from 'react';
import telegram from '../../icons/telegram.png';
const Telegram = (props) => {
  return (
    <div>
      <img src={telegram} alt='telegram' className={props.className} />
    </div>
  );
};

export default Telegram;
