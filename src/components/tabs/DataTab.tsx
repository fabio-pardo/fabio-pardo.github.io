export const DataTab = () => {
  const projects = [
    {
      title: "MICROSERVICES ARCHITECTURE",
      status: "COMPLETED",
      difficulty: "VERY HARD",
      description: "Designed and implemented scalable microservices system using Go and Python",
      technologies: ["Go", "Python", "Docker", "Kubernetes", "PostgreSQL"],
      metrics: { performance: "+300%", reliability: "99.9%", scalability: "10x" }
    },
    {
      title: "HIGH-FREQUENCY TRADING SYSTEM",
      status: "COMPLETED", 
      difficulty: "VERY HARD",
      description: "Built low-latency trading engine processing millions of transactions",
      technologies: ["Go", "Redis", "WebSockets", "TimescaleDB"],
      metrics: { latency: "<1ms", throughput: "1M req/s", uptime: "99.99%" }
    },
    {
      title: "ML PIPELINE INFRASTRUCTURE",
      status: "COMPLETED",
      difficulty: "HARD",
      description: "Created MLOps pipeline for model training and deployment at scale",
      technologies: ["Python", "Kubernetes", "Apache Airflow", "MLflow"],
      metrics: { deployment: "automated", scaling: "elastic", monitoring: "real-time" }
    },
    {
      title: "DISTRIBUTED CACHE SYSTEM", 
      status: "IN PROGRESS",
      difficulty: "HARD",
      description: "Building custom distributed caching solution with consistency guarantees",
      technologies: ["Go", "etcd", "Prometheus", "gRPC"],
      metrics: { nodes: "100+", consistency: "strong", latency: "<5ms" }
    }
  ];

  const experience = [
    {
      title: "SENIOR BACKEND ENGINEER",
      location: "Tech Vault Inc.",
      period: "2022 - PRESENT",
      description: "Leading backend architecture for financial services platform",
      achievements: [
        "Reduced system latency by 70% through Go optimization",
        "Designed fault-tolerant microservices architecture", 
        "Mentored team of 5 junior engineers",
        "Implemented zero-downtime deployment pipeline"
      ]
    },
    {
      title: "BACKEND ENGINEER",
      location: "Wasteland Solutions LLC",
      period: "2020 - 2022", 
      description: "Developed high-performance APIs and data processing systems",
      achievements: [
        "Built real-time data pipeline processing 1TB+ daily",
        "Optimized PostgreSQL queries reducing response time by 80%",
        "Implemented comprehensive monitoring and alerting",
        "Led migration from monolith to microservices"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-terminal-green';
      case 'IN PROGRESS': return 'text-terminal-amber';
      case 'PLANNED': return 'text-terminal-dim';
      default: return 'text-terminal-green';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'VERY HARD': return 'text-red-400';
      case 'HARD': return 'text-terminal-amber';
      case 'MEDIUM': return 'text-terminal-green';
      default: return 'text-terminal-dim';
    }
  };

  return (
    <div className="terminal-border bg-terminal-screen p-6 relative scan-lines min-h-[600px]">
      <div className="space-y-8">
        {/* Projects Section */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">🚀</span>
            MISSION LOG - PROJECTS
          </h2>
          
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-terminal-dim bg-terminal-dark/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-orbitron font-bold text-terminal-green">{project.title}</h3>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                    <div className={`text-xs ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-terminal-dim mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 text-xs bg-terminal-dim text-terminal-dark font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-terminal-amber font-bold">{key.toUpperCase()}</div>
                      <div className="text-terminal-green">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">💼</span>
            EMPLOYMENT HISTORY
          </h2>
          
          <div className="space-y-4">
            {experience.map((job, idx) => (
              <div key={idx} className="border border-terminal-dim bg-terminal-dark/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-orbitron font-bold text-terminal-green">{job.title}</h3>
                    <p className="text-terminal-amber">{job.location}</p>
                  </div>
                  <div className="text-terminal-dim text-sm">{job.period}</div>
                </div>
                
                <p className="text-sm text-terminal-dim mb-3">{job.description}</p>
                
                <div className="space-y-1">
                  {job.achievements.map((achievement, achIdx) => (
                    <div key={achIdx} className="text-sm flex items-start">
                      <span className="text-terminal-amber mr-2">▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};