import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="glow-text animate-pulse-glow">
              Harshita Koppaka
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground">
            Developer Intern & Cloud Enthusiast
          </h2>
          
          <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed">
            Crafting scalable systems with{' '}
            <span className="text-primary font-semibold">Java</span>,{' '}
            <span className="text-accent font-semibold">Python</span>, and{' '}
            <span className="text-primary font-semibold">AWS</span>
          </p>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto">
            Computer Science student at University of North Texas. 
            Currently seeking internship opportunities for Summer 2025.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="glass-button px-8 py-4 text-lg font-semibold min-w-[200px] group"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-button px-8 py-4 text-lg font-semibold min-w-[200px] group"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/harshitakoppaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/harshitakoppaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:harshita.koppaka@gmail.com"
              className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary animate-pulse-glow" />
      </div>
    </section>
  );
};

export default HeroSection;