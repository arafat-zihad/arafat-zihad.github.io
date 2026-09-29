import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = ({ titleArray }) => {
  return (
    <p className="typewriter-text">
      <Typewriter
        words={titleArray}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={40}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  );
};

export default TypewriterText;
