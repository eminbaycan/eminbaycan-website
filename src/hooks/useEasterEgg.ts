import { useState, useCallback, useEffect } from 'react';

export function useEasterEgg() {
  const [clicks, setClicks] = useState<number[]>([]);
  const [isRainbow, setIsRainbow] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = useCallback(() => {
    // Toggle theme
    document.body.classList.toggle('dark-mode');

    const now = Date.now();
    setClicks((prev) => {
      // Filter out clicks older than 10 seconds
      const recentClicks = prev.filter((time) => now - time <= 10000);
      const newClicks = [...recentClicks, now];

      if (newClicks.length >= 15 && !isRainbow) {
        setIsRainbow(true);
        setShowConfetti(true);
        
        // Disable rainbow after 3 seconds
        setTimeout(() => {
          setIsRainbow(false);
        }, 3000);
        
        // Return empty so it resets
        return [];
      }
      return newClicks;
    });
  }, [isRainbow]);

  // Turn on/off the rainbow-mode class on body
  useEffect(() => {
    if (isRainbow) {
      document.body.classList.add('rainbow-mode');
    } else {
      document.body.classList.remove('rainbow-mode');
    }
    
    return () => {
      document.body.classList.remove('rainbow-mode');
    };
  }, [isRainbow]);

  // Cleanup confetti after it drops so it can be re-triggered
  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5500); // Wait for fall animation to complete
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return { handleThemeClick: handleClick, showConfetti };
}
