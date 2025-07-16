'use client'

import { useState } from 'react'

type DataCategory = 'experience' | 'education' | 'certifications'

interface Experience {
  id: string
  title: string
  company: string
  period: string
  status: 'completed' | 'active'
  description: string[]
}

interface Education {
  id: string
  degree: string
  institution: string
  period: string
  status: 'completed'
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expires?: string
}

export function DataTab() {
  const [activeCategory, setActiveCategory] = useState<DataCategory>('experience')

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      status: 'active',
      description: [
        '• Led development of microservices architecture',
        '• Improved system performance by 40%',
        '• Mentored 5 junior developers',
        '• Implemented CI/CD pipelines'
      ]
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      status: 'completed',
      description: [
        '• Built real-time collaboration features',
        '• Developed RESTful APIs',
        '• Reduced load time by 60%',
        '• Integrated third-party services'
      ]
    },
    {
      id: '3',
      title: 'Junior Developer',
      company: 'Web Agency',
      period: '2018 - 2020',
      status: 'completed',
      description: [
        '• Created responsive web applications',
        '• Maintained client websites',
        '• Automated deployment processes',
        '• Collaborated with design team'
      ]
    }
  ]

  const education: Education[] = [
    {
      id: '1',
      degree: 'B.S. Computer Science',
      institution: 'Tech University',
      period: '2014 - 2018',
      status: 'completed'
    }
  ]

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      expires: '2026'
    },
    {
      id: '2',
      name: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2022'
    }
  ]

  const renderContent = () => {
    switch (activeCategory) {
      case 'experience':
        return (
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="border border-green-500/30 p-4 hover:border-green-500/60 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <p className="text-sm opacity-80">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{exp.period}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      exp.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-700/50 text-gray-400'
                    }`}>
                      {exp.status === 'active' ? '● ACTIVE' : 'COMPLETED'}
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-sm space-y-1">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="opacity-90">{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case 'education':
        return (
          <div className="space-y-4">
            {education.map((edu) => (
              <div 
                key={edu.id} 
                className="border border-green-500/30 p-4"
              >
                <h4 className="font-bold text-lg">{edu.degree}</h4>
                <p className="text-sm opacity-80">{edu.institution}</p>
                <p className="text-sm mt-2">{edu.period}</p>
              </div>
            ))}
          </div>
        )

      case 'certifications':
        return (
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="border border-green-500/30 p-4"
              >
                <h4 className="font-bold">{cert.name}</h4>
                <p className="text-sm opacity-80">{cert.issuer}</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Issued: {cert.date}</span>
                  {cert.expires && <span className="text-amber-500">Expires: {cert.expires}</span>}
                </div>
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="h-full flex flex-col terminal-text">
      {/* Category Tabs */}
      <div className="flex gap-4 mb-6 border-b border-green-500/30 pb-4">
        <button
          onClick={() => setActiveCategory('experience')}
          className={`px-4 py-2 transition-all ${
            activeCategory === 'experience'
              ? 'text-green-400 border-b-2 border-green-400'
              : 'opacity-60 hover:opacity-100'
          }`}
        >
          QUESTS
        </button>
        <button
          onClick={() => setActiveCategory('education')}
          className={`px-4 py-2 transition-all ${
            activeCategory === 'education'
              ? 'text-green-400 border-b-2 border-green-400'
              : 'opacity-60 hover:opacity-100'
          }`}
        >
          TRAINING
        </button>
        <button
          onClick={() => setActiveCategory('certifications')}
          className={`px-4 py-2 transition-all ${
            activeCategory === 'certifications'
              ? 'text-green-400 border-b-2 border-green-400'
              : 'opacity-60 hover:opacity-100'
          }`}
        >
          ACHIEVEMENTS
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pr-4">
        {renderContent()}
      </div>
    </div>
  )
} 