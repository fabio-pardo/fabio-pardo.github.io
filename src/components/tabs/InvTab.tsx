export const InvTab = () => {
  const inventory = [
    {
      category: "PRIMARY WEAPONS",
      items: [
        { name: "Python 3.11", condition: 100, rarity: "LEGENDARY", description: "High-damage backend framework" },
        { name: "Go 1.21", condition: 95, rarity: "RARE", description: "Fast concurrent processing tool" },
        { name: "PostgreSQL", condition: 98, rarity: "LEGENDARY", description: "Reliable data storage system" },
        { name: "Docker Engine", condition: 92, rarity: "RARE", description: "Container deployment platform" },
      ]
    },
    {
      category: "SUPPORT GEAR",
      items: [
        { name: "Kubernetes", condition: 85, rarity: "RARE", description: "Orchestration management system" },
        { name: "Redis Cache", condition: 90, rarity: "UNCOMMON", description: "High-speed data retrieval" },
        { name: "AWS Toolkit", condition: 88, rarity: "RARE", description: "Cloud infrastructure arsenal" },
        { name: "Git Version Control", condition: 100, rarity: "LEGENDARY", description: "Time manipulation device" },
      ]
    },
    {
      category: "CONSUMABLES",
      items: [
        { name: "Coffee Beans", condition: 100, rarity: "COMMON", description: "Energy restoration +50" },
        { name: "Stack Overflow Access", condition: 95, rarity: "LEGENDARY", description: "Knowledge boost +100" },
        { name: "Documentation Pages", condition: 80, rarity: "UNCOMMON", description: "Wisdom enhancement" },
        { name: "Code Reviews", condition: 90, rarity: "RARE", description: "Skill development aid" },
      ]
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'LEGENDARY': return 'text-terminal-amber';
      case 'RARE': return 'text-blue-400';
      case 'UNCOMMON': return 'text-green-400';
      default: return 'text-terminal-dim';
    }
  };

  const getConditionColor = (condition: number) => {
    if (condition >= 90) return 'text-terminal-green';
    if (condition >= 70) return 'text-terminal-amber';
    return 'text-red-400';
  };

  return (
    <div className="terminal-border bg-terminal-screen p-6 relative scan-lines min-h-[600px]">
      <div className="space-y-6">
        {inventory.map((category, idx) => (
          <div key={idx}>
            <h2 className="font-orbitron text-lg font-bold terminal-glow mb-4 flex items-center">
              <span className="text-terminal-amber mr-2">📦</span>
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="border border-terminal-dim bg-terminal-dark/50 p-4 hover:border-terminal-green transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-terminal-green">{item.name}</h3>
                    <div className="text-right">
                      <div className={`text-xs ${getRarityColor(item.rarity)}`}>
                        {item.rarity}
                      </div>
                      <div className={`text-sm font-bold ${getConditionColor(item.condition)}`}>
                        {item.condition}%
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-terminal-dim">{item.description}</p>
                  
                  {/* Condition bar */}
                  <div className="mt-2 bg-terminal-dark border border-terminal-dim h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-terminal-green to-terminal-amber transition-all duration-300"
                      style={{ width: `${item.condition}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Carrying capacity */}
        <div className="mt-8 p-4 border border-terminal-amber bg-terminal-dark">
          <div className="flex justify-between items-center">
            <span className="font-orbitron font-bold text-terminal-amber">CARRYING CAPACITY</span>
            <span className="text-terminal-green font-bold">UNLIMITED STORAGE</span>
          </div>
          <div className="text-sm text-terminal-dim mt-1">
            "Knowledge weighs nothing" - Vault-Tec Educational Division
          </div>
        </div>
      </div>
    </div>
  );
};