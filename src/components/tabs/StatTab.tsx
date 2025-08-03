import { StatBar } from "@/components/StatBar";

export const StatTab = () => {
  const coreStats = [
    { label: "PYTHON", value: 95, description: "Backend Development" },
    { label: "GO", value: 90, description: "System Programming" },
    { label: "POSTGRESQL", value: 85, description: "Database Management" },
    { label: "DOCKER", value: 88, description: "Containerization" },
    { label: "KUBERNETES", value: 80, description: "Orchestration" },
    { label: "AWS", value: 82, description: "Cloud Infrastructure" },
    { label: "REDIS", value: 85, description: "Caching & Sessions" },
    { label: "GRPC", value: 78, description: "API Communication" },
  ];

  const specialStats = [
    { label: "PROBLEM SOLVING", value: 95 },
    { label: "SYSTEM DESIGN", value: 88 },
    { label: "CODE OPTIMIZATION", value: 92 },
    { label: "DEBUGGING", value: 90 },
    { label: "MENTORING", value: 85 },
    { label: "DOCUMENTATION", value: 80 },
  ];

  return (
    <div className="terminal-border bg-terminal-screen p-6 relative scan-lines min-h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">⚡</span>
            TECHNICAL ABILITIES
          </h2>
          <div className="space-y-3">
            {coreStats.map((stat) => (
              <StatBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        {/* S.P.E.C.I.A.L Stats */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">🎯</span>
            SPECIAL ATTRIBUTES
          </h2>
          <div className="space-y-3">
            {specialStats.map((stat) => (
              <StatBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>

          {/* Experience Summary */}
          <div className="mt-8 p-4 border border-terminal-dim bg-terminal-dark/50">
            <h3 className="font-orbitron font-bold text-terminal-amber mb-2">EXPERIENCE SUMMARY</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>YEARS IN WASTELAND:</span>
                <span className="text-terminal-green">5+</span>
              </div>
              <div className="flex justify-between">
                <span>MISSIONS COMPLETED:</span>
                <span className="text-terminal-green">50+</span>
              </div>
              <div className="flex justify-between">
                <span>BUGS ELIMINATED:</span>
                <span className="text-terminal-green">1000+</span>
              </div>
              <div className="flex justify-between">
                <span>SYSTEMS OPTIMIZED:</span>
                <span className="text-terminal-green">25+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};