
import { useState, useEffect } from "react";

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div 
        className="absolute w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-16 h-16 bg-purple-500/10 rounded-full animate-pulse delay-300"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: '15%',
          top: '40%'
        }}
      />
      <div 
        className="absolute w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-bounce"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          left: '80%',
          bottom: '30%'
        }}
      />
    </div>
  );
}
