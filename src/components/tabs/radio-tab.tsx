'use client'

import { useState } from 'react'

interface RadioStation {
  id: string
  name: string
  frequency: string
  signal: number
  content: {
    title: string
    date: string
    preview: string
    readTime: string
  }
}

export function RadioTab() {
  const [selectedStation, setSelectedStation] = useState<RadioStation | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const stations: RadioStation[] = [
    {
      id: '1',
      name: 'Tech Talk FM',
      frequency: '101.5',
      signal: 95,
      content: {
        title: 'Building Scalable Microservices',
        date: '2024-01-15',
        preview: 'Learn the best practices for designing and implementing microservices architecture...',
        readTime: '8 min read'
      }
    },
    {
      id: '2',
      name: 'Code Radio',
      frequency: '88.3',
      signal: 88,
      content: {
        title: 'TypeScript Best Practices in 2024',
        date: '2024-01-10',
        preview: 'Discover the latest TypeScript features and how to use them effectively...',
        readTime: '5 min read'
      }
    },
    {
      id: '3',
      name: 'Dev Stories',
      frequency: '94.7',
      signal: 75,
      content: {
        title: 'My Journey to Senior Developer',
        date: '2023-12-20',
        preview: 'Reflecting on the challenges and lessons learned on the path to becoming a senior developer...',
        readTime: '10 min read'
      }
    },
    {
      id: '4',
      name: 'Framework FM',
      frequency: '106.9',
      signal: 82,
      content: {
        title: 'React vs Vue vs Angular in 2024',
        date: '2023-12-15',
        preview: 'A comprehensive comparison of the three major frontend frameworks...',
        readTime: '12 min read'
      }
    }
  ]

  const handleStationSelect = (station: RadioStation) => {
    setSelectedStation(station)
    setIsPlaying(true)
  }

  return (
    <div className="h-full flex gap-6 terminal-text">
      {/* Station List */}
      <div className="w-96">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">RADIO STATIONS</h3>
          <span className="text-xs opacity-60">SIGNAL STRENGTH</span>
        </div>

        <div className="space-y-2">
          {stations.map((station) => (
            <button
              key={station.id}
              onClick={() => handleStationSelect(station)}
              className={`w-full text-left p-3 border transition-all ${
                selectedStation?.id === station.id
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-green-500/30 hover:border-green-500/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">{station.name}</span>
                <span className="text-sm opacity-80">{station.frequency} MHz</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 stat-bar h-2">
                  <div 
                    className="stat-bar-fill h-full" 
                    style={{ width: `${station.signal}%` }}
                  />
                </div>
                <span className="text-xs w-12 text-right">{station.signal}%</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="flex-1 border-l border-green-500/30 pl-6">
        {selectedStation ? (
          <div>
            {/* Radio Header */}
            <div className="mb-6 pb-4 border-b border-green-500/30">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{selectedStation.name}</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="pip-button px-3 py-1 text-sm"
                >
                  {isPlaying ? '■ STOP' : '▶ PLAY'}
                </button>
              </div>
              <p className="text-sm opacity-60">Frequency: {selectedStation.frequency} MHz</p>
            </div>

            {/* Article Content */}
            <div className={`transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-30'}`}>
              <h4 className="text-lg font-bold mb-2">{selectedStation.content.title}</h4>
              <div className="flex items-center gap-4 mb-4 text-sm opacity-60">
                <span>{selectedStation.content.date}</span>
                <span>•</span>
                <span>{selectedStation.content.readTime}</span>
              </div>
              <p className="mb-4">{selectedStation.content.preview}</p>
              
              {isPlaying && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">NOW PLAYING</span>
                  </div>
                  
                  {/* Simulated waveform */}
                  <div className="flex items-center justify-center gap-1 h-16">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-green-500 opacity-60"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animation: `pulse ${0.5 + Math.random() * 0.5}s ease-in-out infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <a 
                href="#" 
                className="pip-button inline-block mt-6"
              >
                READ FULL ARTICLE
              </a>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center opacity-50">
            <div className="text-6xl mb-4">📻</div>
            <p>Select a radio station to tune in</p>
            <p className="text-sm mt-2">Signal lost... searching for transmission...</p>
          </div>
        )}
      </div>
    </div>
  )
} 