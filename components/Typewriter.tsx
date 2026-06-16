"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
}

export default function Typewriter({ 
  text, 
  speed = 45, 
  className = '', 
  cursorClassName = '' 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Keep cursor blinking after typing is done
        setShowCursor(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-[2.5px] h-[1.05em] ml-1 bg-current align-middle ${showCursor ? 'opacity-100' : 'opacity-0'} ${cursorClassName}`}
        style={{ transition: 'opacity 80ms step-end' }}
      />
    </span>
  );
}
