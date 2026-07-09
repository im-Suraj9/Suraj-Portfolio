import {
  ExternalLink,
  Github,
  ShoppingCart,
  Building,
  HeartPulse,
  Bot,
  Laptop,
  Rocket,
} from "lucide-react";
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const projects = [
  {
    title: 'Build Cost AI',
    description:
      'AI-powered construction cost estimation platform with accurate cost prediction and user-friendly interface."',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Groq API'],
    icon: Building,
    color: 'from-blue-500 to-cyan-500',
    highlights: ['AI-powered construction cost estimation platform with accurate cost prediction'],
    github: 'https://github.com/im-Suraj9/Build-Cost-AI',
    demo: 'https://build-cost-ai-sigma.vercel.app',
  },

  {
    title: "VITAL AI",
    description:
      "AI-powered healthcare platform using the MERN Stack for symptom analysis, medical record management, and appointment booking.",
    tech: [
      "React", "JavaScript", "HTML", "Tailwind CSS", "Gemini API",
    ],
    icon: HeartPulse,
    color: "from-blue-600 to-indigo-600",
    highlights: [
      "AI-powered symptom analysis", "Medical record management", "Appointment booking", "JWT authentication", "Responsive UI",
    ],
    github: "https://github.com/im-Suraj9/VITAL-AI",
    demo: "https://vital-ai-indol.vercel.app",
  },
  {
    title: "LOGAN AI",
    description:
      "AI-powered conversational assistant that generates intelligent responses, answers questions, writes content, and assists with coding using the Gemini API.",
    tech: ["React", "JavaScript", "HTML", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API",],
    icon: Bot,
    color: "from-violet-600 to-indigo-600",
    highlights: ["Real-time AI conversations", "AI content generation", "Code generation & debugging", "Context-aware responses", "JWT authentication", "Responsive UI",],
    github: "https://github.com/im-Suraj9/LOGAN-AI",
    demo: "https://logan-ai.netlify.app",
  },
  {
    title: "SURAJ PORTFOLIO ",
    description:
      "A modern and responsive developer portfolio showcasing projects, technical skills, achievements, and contact information with smooth animations.",
    tech: ["React", "JavaScript", "HTML", "Tailwind CSS", "Framer Motion",],
    icon: Laptop,
    color: "from-emerald-500 to-teal-600",
    highlights: ["Responsive design", "Project showcase", "Smooth animations", "Skills & experience section", "Contact form",],
    github: "https://github.com/im-Suraj9/portfolio",
    demo: "https://suraj-portfolio-sepia-eight.vercel.app",
  },
  {
    title: "AUTODEV AI",
    description:
      "An all-in-one AI-powered developer platform featuring AI chat, resume builder, GitHub repository analysis, code generation, and productivity tools for developers.",

    tech: ["React", "JavaScript", "HTML", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT"],

    icon: Rocket,

    color: "from-indigo-600 via-purple-600 to-pink-600",

    highlights: ["AI Chat Assistant", "AI Resume Builder", "GitHub Repository Analyzer", "Code Generation & Debugging", "AI Content Generation", "JWT Authentication", "Responsive Dashboard", "REST API Integration"],

    github: "https://github.com/im-Suraj9/AUTODEV-AI",
    demo: "https://your-demo-link.com",
  },
  {
    title: 'Happy Cart E-Commerce Website',
    description:
      'Responsive e-commerce frontend website with a modern UI, product listings, category sections, shopping cart interface, and a mobile-friendly design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500',
    highlights: [
      'Responsive Design',
      'Product Listing UI',
      'Shopping Cart Interface'
    ],
    github: 'https://github.com/im-Suraj9/Happy-Cart',
    demo: 'HTTPS://e-commerce-six-xi-51.vercel.app',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 hero-bg opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Selected work from my resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card group overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">Featured resume project</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid gap-2 mb-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="text-xs text-muted-foreground bg-secondary/70 border border-border rounded-lg px-3 py-2">
                    {highlight}
                  </div>
                ))}
              </div>


              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>


                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/im-Suraj9" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
