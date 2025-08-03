interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  description?: string;
}

export const StatBar = ({ label, value, maxValue = 100, description }: StatBarProps) => {
  const percentage = Math.min((value / maxValue) * 100, 100);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center space-x-2">
          <span className="font-orbitron font-bold text-terminal-amber">{label}</span>
          {description && (
            <span className="text-sm text-terminal-dim">- {description}</span>
          )}
        </div>
        <span className="font-bold text-terminal-green">{value}/{maxValue}</span>
      </div>
      
      <div className="terminal-border bg-terminal-dark h-6 relative overflow-hidden">
        <div 
          className="stat-bar h-full transition-all duration-1000 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-terminal-green via-terminal-amber to-terminal-green opacity-80"></div>
          <div className="absolute inset-0 terminal-glow opacity-50"></div>
        </div>
        
        {/* Scan line effect for the progress bar */}
        <div className="absolute inset-0 scan-lines pointer-events-none"></div>
        
        {/* Value text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-terminal-dark mix-blend-difference">
          {percentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};