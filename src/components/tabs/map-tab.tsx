'use client'

export function MapTab() {
  const locations = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🏗️', coords: { x: 20, y: 30 } },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '🏢', coords: { x: 70, y: 20 } },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '📮', coords: { x: 50, y: 60 } },
    { name: 'Portfolio', url: 'https://yourportfolio.com', icon: '🏠', coords: { x: 40, y: 40 } },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦', coords: { x: 80, y: 70 } },
  ]

  return (
    <div className="h-full flex flex-col terminal-text">
      <h3 className="text-lg font-bold mb-4">WASTELAND MAP - LOCATIONS</h3>
      
      {/* Map Container */}
      <div className="flex-1 relative border-2 border-green-500/30 bg-green-900/5">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgb(34 197 94 / 0.3) 0, rgb(34 197 94 / 0.3) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, rgb(34 197 94 / 0.3) 0, rgb(34 197 94 / 0.3) 1px, transparent 1px, transparent 40px)
            `
          }}
        />

        {/* Locations */}
        {locations.map((location) => (
          <a
            key={location.name}
            href={location.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${location.coords.x}%`, top: `${location.coords.y}%` }}
          >
            <div className="relative">
              {/* Pulse Effect */}
              <div className="absolute inset-0 w-12 h-12 rounded-full bg-green-500/20 animate-ping" />
              
              {/* Location Marker */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-black border-2 border-green-500 group-hover:border-green-400 transition-all">
                <span className="text-xl">{location.icon}</span>
              </div>

              {/* Location Name */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-black/90 border border-green-500/50 px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {location.name}
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-black/80 border border-green-500/30 p-3">
          <h4 className="text-sm font-bold mb-2">DISCOVERED LOCATIONS</h4>
          <div className="space-y-1">
            {locations.map((location) => (
              <a
                key={location.name}
                href={location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-green-300 transition-colors"
              >
                <span>{location.icon}</span>
                <span>{location.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Compass */}
        <div className="absolute top-4 right-4 w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-green-500/50 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
              N
            </div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-500/30" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-green-500/30" />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 text-xs opacity-60 text-center">
        Click on any location marker to fast travel
      </div>
    </div>
  )
} 