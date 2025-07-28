import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = {
    institution: "University of North Texas",
    degree: "Bachelor of Science in Computer Science",
    expectedGraduation: "May 2026",
    gpa: "Dean's List Spring 2023",
    activities: ["CS Club Member"]
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems", 
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming",
    "System Design"
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Spring 2023",
      icon: <Award className="h-5 w-5" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Citizenship Award",
      description: "Plano High School",
      icon: <Award className="h-5 w-5" />,
      color: "from-blue-500 to-purple-500"
    }
  ];

  const hackathons = [
    {
      name: "HackUNT 2025",
      project: "StudyBuddy",
      description: "AI-powered collaborative studying platform",
      award: "Participant"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science while actively participating 
            in the tech community through hackathons and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Details */}
          <div className="glass-card p-8 hover:shadow-glow transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mr-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {education.degree}
                </h3>
                <p className="text-lg text-accent font-semibold">{education.institution}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Expected Graduation:</span>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  {education.expectedGraduation}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Academic Recognition:</span>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  {education.gpa}
                </Badge>
              </div>

              <div className="pt-4 border-t border-glass-border/30">
                <h4 className="font-semibold mb-2 text-foreground">Activities</h4>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {education.activities.join(", ")}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-card p-8 hover:shadow-glow transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 mr-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                Honors & Awards
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color} mr-4`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="glass-card p-8 mb-8 hover:shadow-glow transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 mr-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Relevant Coursework</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {coursework.map((course, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth text-center group/course"
              >
                <span className="text-sm font-medium text-foreground group-hover/course:text-primary transition-smooth">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 mr-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Hackathons & Competitions</h3>
          </div>

          <div className="space-y-4">
            {hackathons.map((hackathon, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-foreground">{hackathon.name}</h4>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {hackathon.award}
                  </Badge>
                </div>
                <p className="text-lg font-semibold text-accent mb-2">{hackathon.project}</p>
                <p className="text-muted-foreground">{hackathon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;