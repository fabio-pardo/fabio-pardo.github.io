import { Button } from "@/components/ui/button";

interface PipBoyTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'STAT', label: 'STAT', description: 'SKILLS & ABILITIES' },
  { id: 'INV', label: 'INV', description: 'TOOLS & TECHNOLOGIES' },
  { id: 'DATA', label: 'DATA', description: 'PROJECTS & EXPERIENCE' },
  { id: 'MAP', label: 'MAP', description: 'CONTACT & LOCATION' },
];

export const PipBoyTabs = ({ activeTab, onTabChange }: PipBoyTabsProps) => {
  return (
    <div className="terminal-border bg-terminal-screen p-4 mb-6">
      <div className="grid grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => onTabChange(tab.id)}
            className={`
              h-16 flex flex-col items-center justify-center text-center p-2
              font-orbitron font-bold transition-all duration-200
              ${activeTab === tab.id 
                ? 'bg-terminal-green text-terminal-dark border-terminal-amber shadow-lg terminal-glow' 
                : 'bg-terminal-dark border-terminal-dim text-terminal-green hover:border-terminal-green hover:bg-terminal-screen'
              }
            `}
          >
            <div className="text-lg">{tab.label}</div>
            <div className="text-xs opacity-80">{tab.description}</div>
          </Button>
        ))}
      </div>
    </div>
  );
};