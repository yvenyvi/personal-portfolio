"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaGlobe, FaExpandAlt, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaCode, FaLayerGroup, FaDatabase, FaCloud, FaRobot, FaThLarge, FaChartBar, FaBriefcase, FaTasks, FaUser, FaGraduationCap, FaLaptopCode, FaStar, FaCheckCircle, FaMoon, FaSun, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: "hso",
      category: "Desktop App",
      title: "HSO Inventory System",
      description: "A comprehensive Java desktop application for managing medical inventory, tracking equipment, and recording patient & borrower interactions — built as an OOP final project.",
      tech: ["Java", "Swing", "MySQL", "OOP"],
      github: "https://github.com/yvenyvi/hos-system",
      images: [
        "/hos_inventory/nu_hos_inventory (1).png",
        "/hos_inventory/nu_hos_inventory (2).png",
        "/hos_inventory/nu_hos_inventory (3).png",
        "/hos_inventory/nu_hos_inventory (4).png"
      ],
      features: [
        "Role-Based Access Control",
        "Dashboard Analytics",
        "Medicine Inventory",
        "Equipment Tracking",
        "Patient Records",
        "Borrower Management"
      ]
    },
    {
      id: "emote",
      category: "Mobile App",
      title: "Emote — Your Safe Space 🌿",
      description: "A Flutter mood-tracking app with daily check-ins, journal notes, emotion tags, coping strategies, calendar view, analytics, biometric security, and Firebase cloud sync.",
      tech: ["Flutter", "Dart", "Firebase", "Provider", "FL Chart"],
      github: "https://github.com/yvenyvi/mood-tracker",
      live: "https://emote-flax.vercel.app",
      images: [
        "/mood_tracker/mood_tracker (1).png",
        "/mood_tracker/mood_tracker (2).png"
      ],
      features: [
        "Daily Mood Check-ins",
        "Rich Text Journaling",
        "Emotion Tagging",
        "Coping Strategies",
        "Calendar View & Analytics",
        "Biometric Security"
      ]
    },
    {
      id: "tree",
      category: "Web App",
      title: "Interactive Tree Topology Simulator",
      description: "An educational web tool built with D3.js that lets you build, edit, and simulate message transmission across a hierarchical network topology in real time.",
      tech: ["HTML", "CSS", "JavaScript", "D3.js", "Vercel"],
      github: "https://github.com/yvenyvi/tree-topology",
      live: "https://tree-topology-five.vercel.app/",
      images: [
        "/tree_topology/Screenshot 2026-09-16 225737.png",
        "/tree_topology/Screenshot 2026-09-16 225750.png"
      ],
      features: [
        "Dynamic Tree Visualization",
        "Interactive Nodes",
        "Real-Time Updates",
        "Message Simulation",
        "Hop Count & Delay",
        "Export / Import Tree"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-card border-b-[3px] border-text py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-40">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-primary">LJU.portfolio()</h1>
        <div className="flex gap-4 md:gap-6 items-center font-bold uppercase tracking-wider text-sm">
          <a href="#home" className="hidden md:block hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hidden md:block hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hidden md:block hover:text-primary transition-colors">Projects</a>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center bg-bg border-2 border-text shadow-[2px_2px_0_#212529] hover:-translate-y-1 hover:shadow-[4px_4px_0_#212529] transition-all text-primary"
            aria-label="Toggle Dark Mode"
          >
            {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
          </button>

          <button onClick={() => setIsContactOpen(true)} className="hidden md:block neo-box px-4 py-2 text-sm bg-accent1 hover:bg-accent2">
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="shape-1 top-20 left-10"></div>
        <div className="shape-2 bottom-40 right-20"></div>
        <div className="shape-3 top-40 right-40"></div>
        
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary relative inline-block">Lance Jefferson<span className="absolute bottom-1 left-0 w-full h-4 bg-accent1 -z-10 transform -rotate-1"></span></span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-text opacity-90">IT Student &amp; Aspiring System Analyst</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg bg-card p-4 border-[3px] border-text shadow-[4px_4px_0_rgba(33,45,64,0.9)] transform rotate-1">
              Translating business needs into robust technical solutions.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="neo-btn">View My Work</a>
              <button onClick={() => setIsContactOpen(true)} className="bg-bg text-text border-[3px] border-text shadow-neo font-bold px-6 py-3 uppercase tracking-wider transition-all duration-300 hover:bg-card hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">Contact Me</button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent1 border-[4px] border-text shadow-neo flex items-center justify-center overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/profile.svg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-primary/5 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 inline-block relative left-1/2 -translate-x-1/2">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-3 bg-accent2 -z-10 transform rotate-1"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="neo-box p-8 flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary text-white text-2xl flex items-center justify-center border-[3px] border-text shadow-[4px_4px_0_#212529] -rotate-3 mb-2"><FaUser /></div>
              <h3 className="text-2xl font-bold text-primary">Who I Am</h3>
              <p className="font-medium">Hello! I am a fourth-year IT student who combines software development with systems analysis and project management.</p>
              <p className="font-medium">In my school projects, I do more than just write code. I work directly with clients to figure out what they need and design systems that solve their real-world problems.</p>
            </div>
            
            <div className="neo-box p-8 flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary text-white text-2xl flex items-center justify-center border-[3px] border-text shadow-[4px_4px_0_#212529] -rotate-3 mb-2"><FaGraduationCap /></div>
              <h3 className="text-2xl font-bold text-primary">Education</h3>
              <div className="border-l-4 border-accent1 pl-4 mb-4">
                <h4 className="font-bold text-lg">B.S. in Information Technology</h4>
                <p className="font-semibold text-text opacity-70">NU Baliwag University</p>
                <p className="font-bold text-sm text-text bg-text/10 inline-block px-2 py-1 mt-1">2023 - Present</p>
              </div>
              <div className="border-l-4 border-accent2 pl-4">
                <h4 className="font-bold text-lg">Science, Technology, Engineering, and Mathematics(STEM)</h4>
                <p className="font-semibold text-text opacity-70">St. John the Baptist Catholic School</p>
                <p className="font-bold text-sm text-text bg-text/10 inline-block px-2 py-1 mt-1">2021 - 2023</p>
              </div>
            </div>
            
            <div className="neo-box p-8 flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary text-white text-2xl flex items-center justify-center border-[3px] border-text shadow-[4px_4px_0_#212529] -rotate-3 mb-2"><FaLaptopCode /></div>
              <h3 className="text-2xl font-bold text-primary">Interests</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><FaChartBar className="text-accent2 text-xl" /> System Analysis</li>
                <li className="flex items-center gap-3"><FaBriefcase className="text-accent1 text-xl" /> Business Analysis</li>
                <li className="flex items-center gap-3"><FaTasks className="text-primary text-xl" /> Project Management</li>
                <li className="flex items-center gap-3"><FaRobot className="text-secondary text-xl" /> AI-Assisted Web/Mobile Dev</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Technologies I&apos;ve Used
            <span className="absolute bottom-0 left-0 w-full h-3 bg-accent1 -z-10 transform -rotate-1"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechCard title="Languages" icon={<FaCode />} items={["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Dart", "SQL", "PHP"]} />
            <TechCard title="Frontend & Frameworks" icon={<FaLayerGroup />} items={["React", "Next.js", "Flutter", "Bootstrap", "Tailwind CSS"]} />
            <TechCard title="Backend & Databases" icon={<FaDatabase />} items={["Firebase", "Supabase", "MySQL"]} />
            <TechCard title="Cloud & Dev Tools" icon={<FaCloud />} items={["Git", "GitHub", "Vercel", "Azure Portal", "Packet Tracer"]} />
            <TechCard title="AI Tools" icon={<FaRobot />} items={["Gemini", "Claude", "ChatGPT", "Antigravity", "Cursor"]} />
            <TechCard title="Productivity" icon={<FaThLarge />} items={["Notion", "Figma"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 inline-block relative left-1/2 -translate-x-1/2">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primary -z-10 transform rotate-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="neo-box flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden border-b-[3px] border-text bg-gray-200">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="bg-white text-primary border-2 border-text font-bold px-4 py-2 uppercase text-sm shadow-[4px_4px_0_#212529] hover:-translate-y-1 transition-transform flex items-center gap-2"
                    >
                      <FaExpandAlt /> View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col grow">
                  <span className="self-start bg-accent2 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 border-2 border-text shadow-[2px_2px_0_rgba(33,45,64,0.5)] mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mb-3 leading-tight">{project.title}</h3>
                  <p className="text-sm font-medium mb-4 grow line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t: string) => (
                      <span key={t} className="bg-primary text-white text-[10px] font-bold px-2 py-1 border border-text uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center border-t-2 border-dashed border-gray-300 pt-4 mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-text hover:text-primary transition-colors flex items-center gap-1 font-bold text-sm">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="bg-primary text-white text-xs font-bold px-3 py-2 border-2 border-text hover:bg-secondary transition-colors flex items-center gap-1"
                    >
                      <FaInfoCircle /> Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6 md:px-12 border-t-[4px] border-text">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-lg">Copyright &copy; Lance Jefferson R. Uy 2025</div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/mackoy.ramos.94/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary flex items-center justify-center border-2 border-[#212529] shadow-[4px_4px_0_#212529] hover:-translate-y-1 hover:shadow-[6px_6px_0_#212529] transition-all text-xl"><FaFacebookF /></a>
            <a href="https://github.com/yvenyvi" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary flex items-center justify-center border-2 border-[#212529] shadow-[4px_4px_0_#212529] hover:-translate-y-1 hover:shadow-[6px_6px_0_#212529] transition-all text-xl"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/lance-jefferson-uy" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-secondary flex items-center justify-center border-2 border-[#212529] shadow-[4px_4px_0_#212529] hover:-translate-y-1 hover:shadow-[6px_6px_0_#212529] transition-all text-xl"><FaLinkedinIn /></a>
          </div>
          <div className="text-right font-bold space-y-2">
            <div className="flex items-center justify-end gap-2"><FaPhoneAlt className="text-accent1" /> 0969-051-6959</div>
            <div className="flex items-center justify-end gap-2"><FaEnvelope className="text-accent2" /> uylancejr@gmail.com</div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </main>
  );
}

function TechCard({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
  return (
    <div className="neo-box p-6 h-full flex flex-col group">
      <div className="w-12 h-12 bg-primary text-[#e2e2e2] flex items-center justify-center text-xl border-[3px] border-text shadow-[4px_4px_0_#212529] -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></span>
      </h3>
      <div className="flex flex-wrap gap-2 mt-auto">
        {items.map(item => (
          <span key={item} className="bg-bg text-text text-xs font-bold px-3 py-1 border-[2px] border-text hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-[3px_3px_0_#212529] transition-all cursor-default uppercase tracking-wider">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto border-[3px] border-text shadow-[12px_12px_0_#000] relative">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white text-[#212529] border-2 border-[#212529] font-bold text-xl flex items-center justify-center shadow-[2px_2px_0_#212529] hover:bg-primary hover:text-white transition-colors">
          &times;
        </button>
        
        <div className="bg-primary text-white p-6 md:p-8 border-b-[3px] border-text">
          <span className="bg-accent2 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-text mb-3 inline-block shadow-[2px_2px_0_rgba(0,0,0,0.3)]">{project.category}</span>
          <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
        </div>
        
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative h-64 md:h-80 border-[3px] border-text bg-gray-100 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={imgIndex}
                  src={project.images[imgIndex]} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              {project.images.length > 1 && (
                <>
                  <button onClick={() => setImgIndex((i) => (i > 0 ? i - 1 : project.images.length - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-[#212529] border-2 border-[#212529] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                    <FaChevronLeft />
                  </button>
                  <button onClick={() => setImgIndex((i) => (i < project.images.length - 1 ? i + 1 : 0))} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-[#212529] border-2 border-[#212529] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary/80 text-white text-xs font-bold px-2 py-1">
                    {imgIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-lg font-medium mb-6 border-l-4 border-primary pl-4">{project.description}</p>
            
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3 flex items-center gap-2"><FaStar /> Key Features</h4>
            <ul className="grid grid-cols-1 gap-2 mb-6">
              {project.features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm font-semibold border-b border-dashed border-gray-300 dark:border-gray-700 pb-2">
                  <FaCheckCircle className="text-primary mt-1 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3 flex items-center gap-2"><FaLayerGroup /> Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t: string) => (
                <span key={t} className="bg-primary text-white text-xs font-bold px-3 py-1 border-2 border-text uppercase tracking-wider">{t}</span>
              ))}
            </div>
            
            <div className="mt-auto flex gap-4 pt-4 border-t-2 border-text">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="bg-accent1 text-[#212529] border-2 border-[#212529] font-bold px-4 py-2 flex items-center gap-2 shadow-[2px_2px_0_#212529] hover:-translate-y-1 hover:shadow-[4px_4px_0_#212529] transition-all text-sm uppercase tracking-wider">
                  <FaGlobe /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="bg-white text-[#212529] border-2 border-[#212529] font-bold px-4 py-2 flex items-center gap-2 shadow-[2px_2px_0_#212529] hover:-translate-y-1 hover:shadow-[4px_4px_0_#212529] transition-all text-sm uppercase tracking-wider">
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card w-full max-w-md border-[3px] border-text shadow-[12px_12px_0_#000] relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white text-[#212529] border-2 border-[#212529] font-bold text-xl flex items-center justify-center shadow-[2px_2px_0_#212529] hover:bg-primary hover:text-white transition-colors">
          &times;
        </button>
        
        <div className="bg-primary text-white p-6 border-b-[3px] border-text">
          <h2 className="text-2xl font-bold">Contact Me</h2>
        </div>
        
        <form className="p-6 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="bg-bg p-4 border-2 border-text mb-2 text-sm font-semibold space-y-2">
            <div className="flex items-center gap-2"><FaPhoneAlt className="text-accent1" /> 0969-051-6959</div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-accent2" /> uyljr@students.nu-baliwag.edu.ph <span className="opacity-50 text-xs">(School)</span></div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-accent2" /> uylancejr@gmail.com <span className="opacity-50 text-xs">(Personal)</span></div>
          </div>
          
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-1">Name</label>
            <input type="text" required className="w-full bg-white text-[#212529] border-2 border-[#212529] p-2 font-medium focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-1">Email</label>
            <input type="email" required className="w-full bg-white text-[#212529] border-2 border-[#212529] p-2 font-medium focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-1">Message</label>
            <textarea required rows={4} className="w-full bg-white text-[#212529] border-2 border-[#212529] p-2 font-medium focus:outline-none focus:border-primary resize-none"></textarea>
          </div>
          
          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={onClose} className="bg-white text-[#212529] border-2 border-[#212529] px-4 py-2 font-bold uppercase tracking-wider text-sm shadow-[2px_2px_0_#212529] hover:-translate-y-1">Cancel</button>
            <button type="submit" className="bg-primary text-white border-2 border-text px-4 py-2 font-bold uppercase tracking-wider text-sm shadow-[2px_2px_0_#212529] hover:-translate-y-1">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
