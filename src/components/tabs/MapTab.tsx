import { Mail, Github, Linkedin, MapPin, Globe, Phone } from 'lucide-react';

export const MapTab = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL FREQUENCY",
      value: "your.email@example.com",
      status: "SECURE CHANNEL"
    },
    {
      icon: Github,
      label: "CODE REPOSITORY",
      value: "github.com/yourusername",
      status: "PUBLIC ACCESS"
    },
    {
      icon: Linkedin,
      label: "PROFESSIONAL NETWORK",
      value: "linkedin.com/in/yourprofile",
      status: "VERIFIED IDENTITY"
    },
    {
      icon: Phone,
      label: "VOICE COMMUNICATION",
      value: "+1 (555) 123-4567",
      status: "ENCRYPTED LINE"
    },
    {
      icon: MapPin,
      label: "CURRENT COORDINATES",
      value: "San Francisco, CA",
      status: "SETTLEMENT SECURED"
    },
    {
      icon: Globe,
      label: "PORTFOLIO SITE",
      value: "yourwebsite.dev",
      status: "ONLINE TERMINAL"
    }
  ];

  const availability = [
    { day: "MONDAY", status: "AVAILABLE", hours: "09:00 - 18:00" },
    { day: "TUESDAY", status: "AVAILABLE", hours: "09:00 - 18:00" },
    { day: "WEDNESDAY", status: "AVAILABLE", hours: "09:00 - 18:00" },
    { day: "THURSDAY", status: "AVAILABLE", hours: "09:00 - 18:00" },
    { day: "FRIDAY", status: "AVAILABLE", hours: "09:00 - 18:00" },
    { day: "SATURDAY", status: "LIMITED", hours: "10:00 - 14:00" },
    { day: "SUNDAY", status: "OFFLINE", hours: "MAINTENANCE" },
  ];

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE': return 'text-terminal-green';
      case 'LIMITED': return 'text-terminal-amber';
      case 'OFFLINE': return 'text-red-400';
      default: return 'text-terminal-dim';
    }
  };

  return (
    <div className="terminal-border bg-terminal-screen p-6 relative scan-lines min-h-[600px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">📡</span>
            COMMUNICATION CHANNELS
          </h2>
          
          <div className="space-y-4">
            {contactInfo.map((contact, idx) => {
              const IconComponent = contact.icon;
              return (
                <div key={idx} className="border border-terminal-dim bg-terminal-dark/50 p-4 hover:border-terminal-green transition-colors duration-200">
                  <div className="flex items-start space-x-3">
                    <IconComponent className="text-terminal-amber mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-orbitron font-bold text-terminal-green text-sm">
                          {contact.label}
                        </h3>
                        <span className="text-xs text-terminal-dim">{contact.status}</span>
                      </div>
                      <p className="text-terminal-green font-mono">{contact.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response Time */}
          <div className="mt-6 p-4 border border-terminal-amber bg-terminal-dark">
            <h3 className="font-orbitron font-bold text-terminal-amber mb-2">RESPONSE METRICS</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>EMAIL RESPONSE:</span>
                <span className="text-terminal-green">&lt; 24 HOURS</span>
              </div>
              <div className="flex justify-between">
                <span>MESSAGE PRIORITY:</span>
                <span className="text-terminal-green">HIGH</span>
              </div>
              <div className="flex justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-terminal-green">EXCELLENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule & Availability */}
        <div>
          <h2 className="font-orbitron text-xl font-bold terminal-glow mb-6 flex items-center">
            <span className="text-terminal-amber mr-2">⏰</span>
            OPERATIONAL SCHEDULE
          </h2>
          
          <div className="space-y-2">
            {availability.map((schedule, idx) => (
              <div key={idx} className="border border-terminal-dim bg-terminal-dark/50 p-3">
                <div className="flex justify-between items-center">
                  <span className="font-orbitron font-bold text-terminal-green">
                    {schedule.day}
                  </span>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${getAvailabilityColor(schedule.status)}`}>
                      {schedule.status}
                    </div>
                    <div className="text-xs text-terminal-dim">{schedule.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="mt-6 p-4 border border-terminal-green bg-terminal-dark">
            <h3 className="font-orbitron font-bold text-terminal-green mb-2 flex items-center">
              <span className="w-2 h-2 bg-terminal-green rounded-full mr-2 animate-pulse"></span>
              CURRENT STATUS
            </h3>
            <div className="space-y-1 text-sm">
              <div>ONLINE AND READY FOR NEW MISSIONS</div>
              <div className="text-terminal-amber">ACTIVELY SEEKING BACKEND CHALLENGES</div>
              <div className="text-terminal-dim text-xs mt-2">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-6 p-4 border border-terminal-dim bg-terminal-dark/30">
            <h3 className="font-orbitron font-bold text-terminal-amber mb-2">WASTELAND WISDOM</h3>
            <p className="text-sm text-terminal-dim italic">
              "I've been known to debug code faster than a Super Mutant can say 'SMASH'. 
              My Git commits are cleaner than a Vault-Tec laboratory, and my code reviews 
              are more thorough than a Brotherhood of Steel inspection."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};