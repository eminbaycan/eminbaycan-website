import { useEffect, useState } from 'react';

export function Confetti() {
  const [pieces, setPieces] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2, // Random delay up to 2s
    }));
    setPieces(newPieces);
    
    // Cleanup after they finish falling (3s animation + 2s max delay)
    const timeout = setTimeout(() => {
      setPieces([]);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece rounded-sm"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
