import { useState } from 'react';
import { PipBoyHeader } from './PipBoyHeader';
import { PipBoyTabs } from './PipBoyTabs';
import { StatTab } from './tabs/StatTab';
import { InvTab } from './tabs/InvTab';
import { DataTab } from './tabs/DataTab';
import { MapTab } from './tabs/MapTab';

export const PipBoyPortfolio = () => {
  const [activeTab, setActiveTab] = useState('STAT');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'STAT':
        return <StatTab />;
      case 'INV':
        return <InvTab />;
      case 'DATA':
        return <DataTab />;
      case 'MAP':
        return <MapTab />;
      default:
        return <StatTab />;
    }
  };

  return (
    <div className="min-h-screen bg-terminal-dark p-4 relative terminal-flicker">
      {/* Background scan lines effect */}
      <div className="fixed inset-0 scan-lines pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <PipBoyHeader />
        <PipBoyTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
        
        {/* Footer */}
        <div className="mt-6 text-center text-terminal-dim text-sm">
          <div className="terminal-border bg-terminal-screen p-3">
            <span className="font-orbitron">
              PIP-BOY 3000 © ROBCO INDUSTRIES - PERSONALIZED PORTFOLIO INTERFACE
            </span>
            <div className="mt-1 text-xs">
              "War. War never changes. But my code does - it gets better with every commit."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};