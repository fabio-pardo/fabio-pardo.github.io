import { useState, useEffect } from 'react';

export const PipBoyHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal-border bg-terminal-screen p-4 mb-6 relative scan-lines">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="terminal-glow font-orbitron text-2xl font-bold">
            PIP-BOY 3000
          </div>
          <div className="text-terminal-dim">
            SOFTWARE ENGINEER MODULE
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-terminal-amber">
          <div className="text-right">
            <div className="text-xs">DATE</div>
            <div className="font-bold">
              {currentTime.toLocaleDateString('en-US', { 
                month: '2-digit', 
                day: '2-digit', 
                year: '2-digit' 
              })}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs">TIME</div>
            <div className="font-bold">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs">LEVEL</div>
            <div className="font-bold text-xl">SR</div>
          </div>
        </div>
      </div>
      
      {/* Bottom status bar */}
      <div className="mt-3 pt-2 border-t border-terminal-dim flex justify-between text-sm">
        <span>STATUS: OPERATIONAL</span>
        <span>POWER: 100%</span>
        <span>SIGNAL: STRONG</span>
      </div>
    </div>
  );
};