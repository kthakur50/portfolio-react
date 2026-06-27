import { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 90, deleteSpeed = 45, pause = 1800, pauseEmpty = 400 }) => {
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting | pausingEmpty

  useEffect(() => {
    let timeout;

    if (phase === 'typing') {
      if (display.length < text.length) {
        timeout = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause);
      }
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deleteSpeed);
      } else {
        timeout = setTimeout(() => setPhase('typing'), pauseEmpty);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, text, speed, deleteSpeed, pause, pauseEmpty]);

  return (
    <span className="typing-text">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingText;
