'use client'

import Image from 'next/image'

export function StatTab() {
  const skills = [
    { name: 'Frontend', value: 95, special: 'S' },
    { name: 'Backend', value: 85, special: 'P' },
    { name: 'Database', value: 80, special: 'E' },
    { name: 'DevOps', value: 75, special: 'C' },
    { name: 'Testing', value: 90, special: 'I' },
    { name: 'Architecture', value: 88, special: 'A' },
    { name: 'Leadership', value: 82, special: 'L' },
  ]

  const perks = [
    { name: 'React Expert', level: 3, icon: '⚛️' },
    { name: 'TypeScript Master', level: 3, icon: '🔷' },
    { name: 'Cloud Native', level: 2, icon: '☁️' },
    { name: 'Problem Solver', level: 3, icon: '🧩' },
  ]

  return (
    <div className="h-full flex gap-8 terminal-text">
      {/* Left Side - Vault Boy */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative">
          <Image
            src="/pipboy.gif"
            alt="Vault Boy"
            width={200}
            height={200}
            className="opacity-90"
            unoptimized
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold mb-1">Software Engineer</h2>
            <p className="text-sm opacity-80">Level 10</p>
          </div>
        </div>
        
        {/* XP Bar */}
        <div className="w-full max-w-xs mt-12">
          <div className="flex justify-between text-xs mb-1">
            <span>EXPERIENCE</span>
            <span>8500/10000 XP</span>
          </div>
          <div className="stat-bar w-full">
            <div className="stat-bar-fill" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="flex-1 overflow-y-auto pr-4">
        {/* S.P.E.C.I.A.L. Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">S.P.E.C.I.A.L.</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4">
                <span className="w-8 text-center text-amber-500 font-bold text-lg">
                  {skill.special}
                </span>
                <span className="flex-1">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <div className="stat-bar w-32">
                    <div 
                      className="stat-bar-fill" 
                      style={{ width: `${skill.value}%` }} 
                    />
                  </div>
                  <span className="w-12 text-right text-sm">{skill.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div>
          <h3 className="text-lg font-bold mb-4">PERKS</h3>
          <div className="grid grid-cols-2 gap-4">
            {perks.map((perk) => (
              <div 
                key={perk.name} 
                className="flex items-center gap-3 p-3 border border-green-500/30 rounded"
              >
                <span className="text-2xl">{perk.icon}</span>
                <div>
                  <p className="text-sm font-bold">{perk.name}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 ${
                          i < perk.level 
                            ? 'bg-green-500 shadow-green-glow' 
                            : 'bg-green-900/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 