import { useState, useEffect } from 'react';
import './App.css';

const words = [
  'incrível',
  'fantástico',
  'surpreendente',
  'espetacular',
  'extraordinário',
];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-container">
      <h2>
        Este é um projeto é <span className="highlight">{words[index]}</span>{' '}
      </h2>
    </div>
  );
}
