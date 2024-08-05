// Button component
import React, { useState } from 'react';
import './Button.css';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button className='shared-btn' onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default Button;