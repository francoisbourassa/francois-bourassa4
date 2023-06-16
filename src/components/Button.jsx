import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => {
 
  const style = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: borderRadius,
    fontSize: size === 'medium' ? '1rem' : size === 'large' ? '1.5rem' : '0.75rem'
  };

  return (
    <button
      type="button"
      style={style}
      className="p-3 hover:drop-shadow-xl"
    >
      {text}
    </button>
  );
};

export default Button;
