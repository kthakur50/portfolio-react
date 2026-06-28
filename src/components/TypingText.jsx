import { useState, useEffect, useRef } from 'react';

const PHRASES = ['Fullstack Developer', 'Software Engineer', 'AI Enthusiast', 'UI / UX Craftsman'];

const TypingText = () => {
  const [display, setDisplay] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | hold | deleting | gap
  const frameRef = useRef(null);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    // Eased character timing — starts fast, slows near end, fast delete
    const typeDelay  = (i, len) => 55 + Math.sin((i / len) * Math.PI) * 35;
    const deleteDelay = () => 28 + Math.random() * 18;

    let charIdx = display.length;

    const next = (delay, fn) => {
      frameRef.current = setTimeout(fn, delay);
    };

    if (phase === 'typing') {
      if (charIdx < phrase.length) {
        next(typeDelay(charIdx, phrase.length), () =>
          setDisplay(phrase.slice(0, charIdx + 1))
        );
      } else {
        next(1800, () => setPhase('deleting'));
      }
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        next(deleteDelay(), () =>
          setDisplay(d => d.slice(0, -1))
        );
      } else {
        next(320, () => {
          setPhraseIdx(i => (i + 1) % PHRASES.length);
          setPhase('typing');
        });
      }
    }

    return () => clearTimeout(frameRef.current);
  }, [display, phase, phraseIdx]);

  return (
    <span className="typing-text">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingText;
