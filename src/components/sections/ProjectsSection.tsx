import { ExternalLink, Github, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badges?: string[];
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website Builder",
      description: "Full-stack app to create and customize personal portfolios in real-time with drag-and-drop UI.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "EC2", "S3"],
      githubUrl: "https://github.com/harshitakoppaka",
      badges: ["Full-Stack"]
    },
    {
      title: "Custom Inventory Dashboard",
      description: "Team-based inventory system with automated reorder alerts and relational models.",
      technologies: ["Java", "SQL", "Object-Oriented Design"],
      githubUrl: "https://github.com/harshitakoppaka",
      badges: ["Team Project"]
    },
    {
      title: "Smart Health Monitoring System",
      description: "Real-time health data processing from wearables with alerting system and interactive dashboard.",
      technologies: ["Python", "React", "APIs", "Secure Storage"],
      githubUrl: "https://github.com/harshitakoppaka"
    },
    {
      title: "StudyBuddy",
      description: "Hackathon project for collaborative studying with AI recommendations and reminders.",
      technologies: ["AI", "JavaScript", "Firebase"],
      githubUrl: "https://github.com/harshitakoppaka",
      badges: ["Hackathon Project", "HackUNT 2025"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React.js': 'bg-blue-500/20 text-blue-300',
      'React': 'bg-blue-500/20 text-blue-300',
      'Node.js': 'bg-green-500/20 text-green-300',
      'Java': 'bg-orange-500/20 text-orange-300',
      'Python': 'bg-yellow-500/20 text-yellow-300',
      'JavaScript': 'bg-yellow-500/20 text-yellow-300',
      'AWS': 'bg-purple-500/20 text-purple-300',
      'MongoDB': 'bg-green-600/20 text-green-400',
      'SQL': 'bg-blue-600/20 text-blue-400',
      'Firebase': 'bg-orange-600/20 text-orange-400',
      'AI': 'bg-pink-500/20 text-pink-300',
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            cloud technologies, and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-button rounded-lg hover:scale-110 transition-transform"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-button rounded-lg hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Badges */}
              {project.badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge 
                      key={badgeIndex}
                      variant="secondary"
                      className={`${
                        badge.includes('Hackathon') 
                          ? 'bg-primary/20 text-primary border-primary/30' 
                          : badge.includes('Team')
                          ? 'bg-accent/20 text-accent border-accent/30'
                          : 'bg-secondary/50 text-secondary-foreground'
                      } px-3 py-1`}
                    >
                      {badge.includes('Hackathon') && <Award className="w-3 h-3 mr-1" />}
                      {badge.includes('Team') && <Users className="w-3 h-3 mr-1" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-button px-8 py-3 text-lg group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;