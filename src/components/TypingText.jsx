import { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, texts, speed = 90, deleteSpeed = 45, pause = 1800, pauseEmpty = 400 }) => {
  const list = texts || [text];
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState('typing');
  const indexRef = useRef(0);

  useEffect(() => {
    let timeout;
    const current = list[indexRef.current];

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause);
      }
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deleteSpeed);
      } else {
        indexRef.current = (indexRef.current + 1) % list.length;
        timeout = setTimeout(() => setPhase('typing'), pauseEmpty);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase]);

  return (
    <span className="typing-text">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingText;
