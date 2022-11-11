import React from 'react';
import './style.scss';

const AnimatedText = ({ text }) => {
  return (
    <div className="animated-text-container">
      {[...text].map((value) => (
        <div className="animated-text-item">{value}</div>
      ))}
    </div>
  );
};

export default AnimatedText;
