'use client'

import { useState } from 'react'

interface Project {
  id: string
  name: string
  type: 'web' | 'mobile' | 'api' | 'tool'
  weight: number
  value: number
  description: string
  technologies: string[]
  link?: string
}

export function InventoryTab() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      type: 'web',
      weight: 10,
      value: 1000,
      description: 'Full-stack e-commerce solution with real-time inventory management',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: '2',
      name: 'Task Management API',
      type: 'api',
      weight: 5,
      value: 500,
      description: 'RESTful API with JWT authentication and real-time updates',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      link: 'https://github.com/yourusername/taskapi'
    },
    {
      id: '3',
      name: 'Mobile Fitness Tracker',
      type: 'mobile',
      weight: 8,
      value: 800,
      description: 'Cross-platform mobile app for tracking workouts and nutrition',
      technologies: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
    },
    {
      id: '4',
      name: 'CLI Developer Tool',
      type: 'tool',
      weight: 3,
      value: 300,
      description: 'Command-line tool for automating development workflows',
      technologies: ['Python', 'Click', 'Docker', 'GitHub Actions'],
    },
  ]

  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'web': return '🌐'
      case 'mobile': return '📱'
      case 'api': return '⚡'
      case 'tool': return '🔧'
    }
  }

  const totalWeight = projects.reduce((sum, p) => sum + p.weight, 0)
  const totalValue = projects.reduce((sum, p) => sum + p.value, 0)

  return (
    <div className="h-full flex gap-6 terminal-text">
      {/* Project List */}
      <div className="flex-1 overflow-y-auto">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">PROJECTS</h3>
          <div className="text-sm opacity-80">
            <span>WT: {totalWeight}/100</span>
            <span className="ml-4">VAL: {totalValue}</span>
          </div>
        </div>

        <div className="space-y-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full text-left p-3 border transition-all ${
                selectedProject?.id === project.id
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-green-500/30 hover:border-green-500/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{getTypeIcon(project.type)}</span>
                  <span>{project.name}</span>
                </div>
                <div className="text-xs opacity-60">
                  <span>WT: {project.weight}</span>
                  <span className="ml-3">VAL: {project.value}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="w-96 border-l border-green-500/30 pl-6">
        {selectedProject ? (
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">{getTypeIcon(selectedProject.type)}</span>
              {selectedProject.name}
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-60 mb-2">DESCRIPTION</p>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <p className="text-sm opacity-60 mb-2">TECHNOLOGIES</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs border border-green-500/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="opacity-60">WEIGHT</p>
                  <p className="text-lg">{selectedProject.weight}</p>
                </div>
                <div>
                  <p className="opacity-60">VALUE</p>
                  <p className="text-lg">{selectedProject.value}</p>
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pip-button inline-block mt-4"
                >
                  VIEW PROJECT
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center opacity-50">
            <p>Select a project to view details</p>
          </div>
        )}
      </div>
    </div>
  )
} 