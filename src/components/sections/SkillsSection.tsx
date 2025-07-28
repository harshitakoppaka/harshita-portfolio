import { Code, Database, Cloud, Wrench, Brain, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="h-8 w-8" />,
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="h-8 w-8" />,
      skills: ["React.js", "Node.js", "Git", "Docker", "Jenkins", "Express.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: ["SQL", "MongoDB", "DynamoDB", "PostgreSQL", "MySQL"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS (EC2, Lambda, S3)", "Google Cloud", "CI/CD", "Kubernetes"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Practices",
      icon: <Brain className="h-8 w-8" />,
      skills: ["OOP", "Agile (Scrum)", "TDD", "Design Patterns", "System Design"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Other Technologies",
      icon: <Globe className="h-8 w-8" />,
      skills: ["REST APIs", "Microservices", "Optimization Algorithms", "GraphQL"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud technologies, 
            and modern software engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth group/skill"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3 group-hover/skill:scale-125 transition-transform"></div>
                    <span className="text-foreground font-medium group-hover/skill:text-primary transition-smooth">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-6 pt-6 border-t border-glass-border/30">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Proficiency</span>
                  <span className="font-semibold text-primary">Advanced</span>
                </div>
                <div className="mt-2 w-full bg-secondary/30 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse-glow`}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 glow-text">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Always exploring new technologies and methodologies. Currently diving deeper into 
              <span className="text-primary font-semibold"> machine learning</span>, 
              <span className="text-accent font-semibold"> serverless architectures</span>, and 
              <span className="text-primary font-semibold"> advanced system design patterns</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;