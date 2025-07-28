import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "harshita.koppaka@gmail.com",
      href: "mailto:harshita.koppaka@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone", 
      value: "+1 (732) 801-8006",
      href: "tel:+17328018006",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "harshitakoppaka",
      href: "https://github.com/harshitakoppaka",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "harshitakoppaka",
      href: "https://linkedin.com/in/harshitakoppaka",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking for a passionate developer intern, want to collaborate 
                on an exciting project, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 group block"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} mr-4 group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-accent transition-smooth">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="glass-card p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Dallas-Fort Worth, Texas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-secondary/30 border-glass-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-secondary/30 border-glass-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows={6}
                  required
                  className="bg-secondary/30 border-glass-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full glass-button py-3 text-lg font-semibold group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 p-4 rounded-lg bg-secondary/20 border border-glass-border/30">
              <p className="text-sm text-muted-foreground text-center">
                💼 <span className="font-semibold text-primary">Currently seeking Summer 2025 internships</span> in 
                software development, backend engineering, and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;