/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Zap, 
  Droplets, 
  Bike, 
  Hammer, 
  Wrench, 
  AirVent, 
  CheckCircle2, 
  X,
  ChevronRight,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Constants ---
// Premium Dark Mode Palette
const PRIMARY_COLOR = "text-indigo-400";
const PRIMARY_BG = "bg-indigo-600";
const ACCENT_COLOR = "text-amber-400";
const ACCENT_BG = "bg-amber-500";

// Glassmorphism & Premium Cards
const GLASS_CARD = "bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl shadow-black/30";
const GLASS_NAVBAR = "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/50";
const PREMIUM_BUTTON = "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40";
const CLAY_CARD = "bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/30 shadow-xl shadow-black/20 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300";
const CLAY_BUTTON = PREMIUM_BUTTON;

const SERVICES = [
  { 
    id: 1, 
    title: "Electrician", 
    icon: Zap, 
    desc: "Expert wiring, repairs & installations", 
    color: "bg-yellow-500/20 text-yellow-400",
    process: "Our electricians begin with a comprehensive safety audit of your premises. We use industry-standard tools to diagnose faults, replace worn-out components with genuine spares, and ensure all wiring meets local safety regulations. Final testing is done in your presence to ensure 100% satisfaction."
  },
  { 
    id: 2, 
    title: "Plumber", 
    icon: Wrench, 
    desc: "Leak fixes, pipe installs & blockages", 
    color: "bg-blue-500/20 text-blue-400",
    process: "Plumbing repairs start with identifying the source of leaks using pressure testing. We handle everything from minor faucet leaks to major pipe replacements. Our team ensures water-tight seals using premium quality materials and provides a post-fix cleanup of the workspace."
  },
  { 
    id: 3, 
    title: "Bike Mechanic", 
    icon: Bike, 
    desc: "Doorstep servicing & repair", 
    color: "bg-red-500/20 text-red-400",
    process: "Doorstep bike servicing includes a 20-point checklist: oil change, brake adjustment, chain cleaning/lubrication, and electrical check. We carry mobile toolkits to handle most major repairs on-site, saving you a trip to the local garage."
  },
  { 
    id: 4, 
    title: "Home Cleaning", 
    icon: Droplets, 
    desc: "Deep cleaning & sanitization", 
    color: "bg-green-500/20 text-green-400",
    process: "Our cleaning process uses eco-friendly, non-toxic chemicals that are safe for children and pets. We follow a systematic 'top-to-bottom' approach, covering ceiling fans, walls, kitchen Degreasing, and floor scrubbing with high-end machines."
  },
  { 
    id: 5, 
    title: "AC Repair", 
    icon: AirVent, 
    desc: "Cooling issues & gas refilling", 
    color: "bg-cyan-500/20 text-cyan-400",
    process: "AC service involves jet-stream cleaning of filters and indoor/outdoor coils. We check gas levels, monitor ampere load, and ensure optimal cooling performance. Any parts requiring replacement are discussed beforehand with transparent pricing."
  },
  { 
    id: 6, 
    title: "Carpenter", 
    icon: Hammer, 
    desc: "Furniture build & wood repairs", 
    color: "bg-amber-500/20 text-amber-400",
    process: "Carpentry services cover hinge repairs, lock installations, and custom furniture modifications. We use seasoned wood and branded fittings to ensure longevity. Our experts take precise measurements to ensure seamless integration with your existing decor."
  },
];

export default function App() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-300">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? `${GLASS_NAVBAR} shadow-lg shadow-black/20 py-3` : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className={`${ACCENT_BG} p-1.5 rounded-lg shadow-lg shadow-amber-500/20`}>
              <ShieldCheck className="w-5 h-5 text-slate-900" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${PRIMARY_COLOR}`}>ONYO</span>
          </div>

          {/* Navigation Links (Always visible) */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">Process</button>
            <button onClick={() => scrollToSection('why-us')} className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-105">Why ONYO</button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Removed as per request */}

      <main>
        {/* --- Hero Section --- */}
        <section id="hero" className="relative pt-5 md:pt-16 pb-12 md:pb-24 px-4 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-br from-indigo-950/40 via-slate-900/20 to-transparent rounded-bl-[100px] hidden lg:block" />
          <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  <span>Trusted across Chennai</span>
                </div>
                
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${PRIMARY_COLOR} mb-6 leading-[1.1]`}>
                  Find Trusted <span className={`${ACCENT_COLOR}`}>Professionals</span> Near You — Instantly
                </h1>
                
                <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Verified electricians, plumbers, cleaners, and more at your convenience. Quality service delivered right to your doorstep.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#" className={`${PRIMARY_BG} text-white px-10 py-5 rounded-full font-bold text-lg ${CLAY_BUTTON} flex items-center group`}>
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-700/30">
                  <img 
                    src="/assets/image.png" 
                    alt="Professional at work" 
                    className="w-full h-auto aspect-square object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
                </div>
                
                {/* Floating Cards for Trust */}
                <div className={`absolute -bottom-6 -left-6 ${GLASS_CARD} p-4 hidden sm:flex items-center space-x-3 max-w-[200px] z-20`}>
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight">Verified Professionals Only</span>
                </div>

                <div className={`absolute -top-6 -right-6 ${GLASS_CARD} p-4 hidden sm:flex items-center space-x-3 max-w-[200px] z-20`}>
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 leading-tight">30-Min Fast Response</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Problem & Solution Section --- */}
        <section className="py-16 md:py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`${GLASS_CARD} p-8 lg:p-12`}>
                <h3 className="text-xl font-bold mb-8 text-slate-500">The Problem</h3>
                <ul className="space-y-6">
                  {[
                    "Finding reliable workers is frustratingly difficult",
                    "No pricing transparency - hidden costs everywhere",
                    "Last-minute cancellations leaving you stranded"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-500/20 flex-shrink-0 flex items-center justify-center mt-1 mr-4">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className={`text-3xl font-bold mb-8 ${PRIMARY_COLOR}`}>
                  Solving the Local Service Gap with <span className={ACCENT_COLOR}>ONYO</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "Verified Professionals", desc: "Every worker on our platform undergoes a rigorous multi-step background check.", icon: ShieldCheck },
                    { title: "Transparent Pricing", desc: "No surprises. See prices upfront before you choose a service.", icon: Zap },
                    { title: "Quick & Doorstep Service", desc: "Our system brings trusted professionals to your door instantly.", icon: Clock }
                  ].map((item, idx) => (
                    <div key={idx} className="flex group">
                      <div className={`h-12 w-12 rounded-2xl ${ACCENT_BG} flex flex-shrink-0 items-center justify-center mr-6 shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-110`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-400 italic leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-16 md:py-20 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${PRIMARY_COLOR}`}>Our Premium Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm">From essential repairs to major home maintenance, we've got you covered with experts in every field.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  whileHover={{ translateY: -5 }}
                  className={`${CLAY_CARD} p-4 sm:p-6 md:p-8 transition-all group`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${service.color} ${CLAY_BUTTON} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{service.title}</h4>
                  <p className="text-slate-400 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex items-center text-indigo-400 font-bold text-sm group/btn cursor-pointer hover:text-indigo-300 transition-colors"
                  >
                    View Details <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- How It Works --- */}
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-900 text-slate-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-2 border-indigo-500 rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-indigo-500 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Getting a Professional is Easy</h2>
              <p className="text-slate-400 text-base max-w-2xl mx-auto">Get your home issues resolved in three simple steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Timeline Connector Desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0" />
              
              {[
                { step: "01", title: "Select a Service", desc: "Choose a category and select your specific requirements in seconds.", icon: Phone },
                { step: "02", title: "Professional Arrives", desc: "Our verified partner arrives at your doorstep exactly when you need them.", icon: Clock },
                { step: "03", title: "Get the Job Done", desc: "Relax while the expert handles everything. High quality work guaranteed.", icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/20 group hover:rotate-12 transition-transform relative border border-slate-700">
                    <item.icon className="w-8 h-8 text-indigo-400" />
                    <div className="absolute -top-2 -right-2 bg-amber-500 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center text-xs font-bold shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Choose Us (Trust Section) --- */}
        <section id="why-us" className="py-16 md:py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${PRIMARY_COLOR}`}>Why Thousands Trust ONYO</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm">Experience the difference with our verified professionals and premium service guarantee.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {[
                { title: "Verified Pros", desc: "Background checked experts", icon: ShieldCheck },
                { title: "Affordable", desc: "Zero hidden fees", icon: Zap },
                { title: "Fast Response", desc: "Quick turnaround", icon: Clock },
                { title: "Service Guarantee", desc: "Satisfaction promise", icon: CheckCircle2 },
              ].map((item, idx) => (
                <div key={idx} className={`${GLASS_CARD} p-3 sm:p-4 md:p-6 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300`}>
                  <div className={`bg-slate-700/50 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-sm border border-slate-600/30`}>
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${ACCENT_COLOR}`} />
                  </div>
                  <h5 className="font-bold mb-1 text-slate-200 text-xs sm:text-sm">{item.title}</h5>
                  <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Service Detail Modal --- */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`${GLASS_CARD} relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10`}
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className={`absolute top-6 right-6 p-2 bg-slate-700 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-all ${CLAY_BUTTON}`}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className={`w-16 h-16 rounded-2xl ${selectedService.color} ${CLAY_BUTTON} flex items-center justify-center mb-8`}>
                  <selectedService.icon className="w-8 h-8" />
                </div>

                <h3 className={`text-xl font-black mb-2 ${PRIMARY_COLOR}`}>{selectedService.title} Service</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-6">Execution Process</p>
                
                <div className="space-y-6">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    {selectedService.process}
                  </p>
                  
                  <div className="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
                    <h5 className="font-bold text-indigo-300 mb-3 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Key Steps:
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-400 font-medium">
                      <li>• Professional site inspection & audit</li>
                      <li>• High-grade tools & genuine materials</li>
                      <li>• Post-service safety verification</li>
                      <li>• Workspace cleanup & client handover</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- Testimonials Removed as per request --- */}


        {/* --- CTA Section --- */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-[2rem] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Expert Professionals at Chennai</h2>
              <p className="text-indigo-200 mb-10 text-lg max-w-xl mx-auto">Don't let home repairs wait. Join thousands of satisfied households who trust ONYO.</p>
              <a href="tel:+917868078573" className={`${ACCENT_BG} text-slate-900 px-10 py-5 rounded-full font-black text-xl ${CLAY_BUTTON} inline-block`}>
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`${ACCENT_BG} p-1.5 rounded-lg shadow-lg shadow-amber-500/20`}>
                    <ShieldCheck className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className={`text-xl font-bold tracking-tight ${PRIMARY_COLOR}`}>ONYO</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Chennai's leading service marketplace connecting you with the finest verified local professionals.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border border-slate-700 hover:border-indigo-500">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border border-slate-700 hover:border-indigo-500">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border border-slate-700 hover:border-indigo-500">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border border-slate-700 hover:border-indigo-500">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border border-slate-700 hover:border-indigo-500">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-slate-500">Services</h6>
                <ul className="space-y-4 text-sm font-semibold text-slate-400">
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors">Electricians</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors">Plumbers</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors">Home Cleaning</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors">AC Services</li>
                  <li className="hover:text-indigo-400 cursor-pointer transition-colors">Mechanical Help</li>
                </ul>
              </div>

              <div>
                <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-slate-500">Contact Us</h6>
                <ul className="space-y-4 text-sm font-semibold text-slate-400">
                  <li className="flex items-start">
                    <MapPin className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>Survey 237/3B, Mallivakkam, Jaganathapuram post, Chennai 67.</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>+91 78680 78573</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>support@onyo.in</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-800 text-center text-xs font-bold text-slate-600 uppercase tracking-widest">
              © {new Date().getFullYear()} ONYO Service Connect. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>

      {/* --- Sticky Elements --- */}
      
      {/* WhatsApp Removed as per request */}

      {/* Sticky Bottom Book Button Removed as per request */}

      {/* Sticky Bottom Book Button Removed as per request */}

    </div>
  );
}
