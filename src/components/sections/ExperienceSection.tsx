import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Software Development Intern",
      company: "CyberCoders",
      location: "Remote",
      period: "Nov 2024 – May 2025",
      type: "Internship",
      description: [
        "Built backend logic with Java/Python for enterprise-level applications",
        "Deployed scalable services using AWS Lambda, S3, and DynamoDB",
        "Created REST APIs and caching strategies to optimize performance by 40%",
        "Collaborated with cross-functional teams using Agile methodology"
      ],
      technologies: ["Java", "Python", "AWS Lambda", "S3", "DynamoDB", "REST APIs"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Java': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Python': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'AWS Lambda': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'S3': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'DynamoDB': 'bg-green-500/20 text-green-300 border-green-500/30',
      'REST APIs': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience building scalable systems and working with enterprise technologies 
            in fast-paced development environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 group"
            >
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-smooth mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-xl text-muted-foreground mb-2">
                    <span className="font-semibold text-accent">{experience.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start lg:items-end space-y-2">
                  <Badge 
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30 px-4 py-2"
                  >
                    {experience.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {experience.period}
                  </div>
                </div>
              </div>

              {/* Experience Description */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Note */}
        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 glow-text">Looking Forward</h3>
            <p className="text-muted-foreground leading-relaxed">
              Actively seeking <span className="text-primary font-semibold">Summer 2025 internship opportunities</span> 
              to contribute to innovative projects and continue growing my expertise in 
              <span className="text-accent font-semibold"> backend development</span>, 
              <span className="text-primary font-semibold"> cloud architecture</span>, and 
              <span className="text-accent font-semibold"> scalable system design</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;