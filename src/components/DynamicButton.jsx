
import React from 'react';

const DynamicButton = ({ bgcolor, textcolor, text, link }) => {
  const isWhite = textcolor === 'white';

  return (
    <div className="dynamic-button-wrapper">
      <a
        className="dynamic-button"
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: bgcolor === 'white' ? '#fff' : '#000',
          color: isWhite ? '#fff' : '#000',
        }}
      >
        <span>{text}</span>

        <svg
          className="dynamic-button-icon"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            fill={isWhite ? '#fff' : '#000'}
            d="m9.234 29.627 15.9-15.9v11.54h3.084V8.462H11.414v3.083h11.54l-15.9 15.9z"
          />
        </svg>
      </a>
    </div>
  );
};

export default DynamicButton;

