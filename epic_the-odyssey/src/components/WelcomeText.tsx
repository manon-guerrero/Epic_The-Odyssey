import { useEffect, useState } from 'react';
import './WelcomeText.css';

export function WelcomeText() {
  const [showText, setShowText] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 15000);

      return () => clearTimeout(timer);
    }, []);

  if (!showText) return null;

  return (
    <div className="welcome-text">
      <h1>600 men under his command, 600 miles of open sea</h1>
      <h2>But the problem is not the distance, it's what lies in between</h2>
      <h3>Will they come home safe ? Scroll through 9 sagas to discover their story</h3>
      <p>Full speed ahead</p>
    </div>
  );
}