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
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Constants ---
const PRIMARY_COLOR = "text-blue-900";
const PRIMARY_BG = "bg-blue-600";
const ACCENT_COLOR = "text-orange-500";
const ACCENT_BG = "bg-orange-400";

const CLAY_CARD = "bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.05),inset_0_-10px_20px_rgba(0,0,0,0.05),inset_0_10px_20px_rgba(255,255,255,0.9)] border-4 border-white/50";
const CLAY_BUTTON = "shadow-[0_10px_20px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300";

const SERVICES = [
  { 
    id: 1, 
    title: "Electrician", 
    icon: Zap, 
    desc: "Expert wiring, repairs & installations", 
    color: "bg-yellow-50 text-yellow-600",
    process: "Our electricians begin with a comprehensive safety audit of your premises. We use industry-standard tools to diagnose faults, replace worn-out components with genuine spares, and ensure all wiring meets local safety regulations. Final testing is done in your presence to ensure 100% satisfaction."
  },
  { 
    id: 2, 
    title: "Plumber", 
    icon: Wrench, 
    desc: "Leak fixes, pipe installs & blockages", 
    color: "bg-blue-50 text-blue-600",
    process: "Plumbing repairs start with identifying the source of leaks using pressure testing. We handle everything from minor faucet leaks to major pipe replacements. Our team ensures water-tight seals using premium quality materials and provides a post-fix cleanup of the workspace."
  },
  { 
    id: 3, 
    title: "Bike Mechanic", 
    icon: Bike, 
    desc: "Doorstep servicing & repair", 
    color: "bg-red-50 text-red-600",
    process: "Doorstep bike servicing includes a 20-point checklist: oil change, brake adjustment, chain cleaning/lubrication, and electrical check. We carry mobile toolkits to handle most major repairs on-site, saving you a trip to the local garage."
  },
  { 
    id: 4, 
    title: "Home Cleaning", 
    icon: Droplets, 
    desc: "Deep cleaning & sanitization", 
    color: "bg-green-50 text-green-600",
    process: "Our cleaning process uses eco-friendly, non-toxic chemicals that are safe for children and pets. We follow a systematic 'top-to-bottom' approach, covering ceiling fans, walls, kitchen Degreasing, and floor scrubbing with high-end machines."
  },
  { 
    id: 5, 
    title: "AC Repair", 
    icon: AirVent, 
    desc: "Cooling issues & gas refilling", 
    color: "bg-cyan-50 text-cyan-600",
    process: "AC service involves jet-stream cleaning of filters and indoor/outdoor coils. We check gas levels, monitor ampere load, and ensure optimal cooling performance. Any parts requiring replacement are discussed beforehand with transparent pricing."
  },
  { 
    id: 6, 
    title: "Carpenter", 
    icon: Hammer, 
    desc: "Furniture build & wood repairs", 
    color: "bg-amber-50 text-amber-600",
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className={`${ACCENT_BG} p-1.5 rounded-lg`}>
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${PRIMARY_COLOR}`}>ONYO</span>
          </div>

          {/* Navigation Links (Always visible) */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-blue-900 transition-colors">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-blue-900 transition-colors">Process</button>
            <button onClick={() => scrollToSection('why-us')} className="text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-blue-900 transition-colors">Why ONYO</button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Removed as per request */}

      <main>
        {/* --- Hero Section --- */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <span>Trusted across Thiruvallur District</span>
                </div>
                
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${PRIMARY_COLOR} mb-6 leading-[1.1]`}>
                  Find Trusted <span className={`${ACCENT_COLOR}`}>Professionals</span> Near You — Instantly
                </h1>
                
                <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Verified electricians, plumbers, cleaners, and more at your convenience. Quality service delivered right to your doorstep.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className={`${PRIMARY_BG} text-white px-10 py-5 rounded-full font-bold text-lg ${CLAY_BUTTON} flex items-center group`}>
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                  <img 
                    src="/assets/image.png" 
                    alt="Professional at work" 
                    className="w-full h-auto aspect-square object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
                
                {/* Floating Cards for Trust */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center space-x-3 max-w-[200px] border border-gray-100 z-20">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 leading-tight">Verified Professionals Only</span>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center space-x-3 max-w-[200px] border border-gray-100 z-20">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 leading-tight">30-Min Fast Response</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Problem & Solution Section --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`${CLAY_CARD} p-8 lg:p-12`}>
                <h3 className="text-xl font-bold mb-8 text-gray-400">The Problem</h3>
                <ul className="space-y-6">
                  {[
                    "Finding reliable workers is frustratingly difficult",
                    "No pricing transparency - hidden costs everywhere",
                    "Last-minute cancellations leaving you stranded"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center mt-1 mr-4">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600 font-medium">{item}</span>
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
                        <p className="text-gray-600 italic leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${PRIMARY_COLOR}`}>Our Premium Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm">From essential repairs to major home maintenance, we've got you covered with experts in every field.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  whileHover={{ translateY: -10 }}
                  className={`${CLAY_CARD} p-8 transition-all group`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} ${CLAY_BUTTON} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex items-center text-blue-900 font-bold text-sm group/btn cursor-pointer"
                  >
                    View Details <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- How It Works --- */}
        <section id="how-it-works" className="py-24 bg-blue-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Getting a Professional is Easy</h2>
              <p className="text-blue-200 text-base max-w-2xl mx-auto">Get your home issues resolved in three simple steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Timeline Connector Desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-800 -translate-y-1/2 z-0" />
              
              {[
                { step: "01", title: "Select a Service", desc: "Choose a category and select your specific requirements in seconds.", icon: Phone },
                { step: "02", title: "Professional Arrives", desc: "Our verified partner arrives at your doorstep exactly when you need them.", icon: Clock },
                { step: "03", title: "Get the Job Done", desc: "Relax while the expert handles everything. High quality work guaranteed.", icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-black/20 group hover:rotate-12 transition-transform relative">
                    <item.icon className="w-8 h-8 text-blue-900" />
                    <div className="absolute -top-2 -right-2 bg-orange-400 w-8 h-8 rounded-full border-4 border-blue-900 flex items-center justify-center text-xs font-bold shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Choose Us (Trust Section) --- */}
        <section id="why-us" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className={`text-3xl font-extrabold mb-8 ${PRIMARY_COLOR} leading-tight`}>
                  Why Thousands Trust <br /><span className={ACCENT_COLOR}>ONYO Service Connect</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: "Verified Pros", desc: "Background checked and trained experts.", icon: ShieldCheck },
                    { title: "Affordable Pricing", desc: "Market rates with zero hidden fees.", icon: Zap },
                    { title: "Fast Response", desc: "Quick turnout for urgent repair needs.", icon: Clock },
                    { title: "Service Guarantee", desc: "Work covered by our satisfaction promise.", icon: CheckCircle2 },
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 ${CLAY_CARD} hover:bg-blue-50 transition-colors`}>
                      <div className="bg-white/80 w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white">
                        <item.icon className={`w-5 h-5 ${ACCENT_COLOR}`} />
                      </div>
                      <h5 className="font-bold mb-2">{item.title}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden aspect-video shadow-2xl relative border-8 border-white">
                  <img src="/assets/image1.png" alt="Trust" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center p-6 text-center">
                    <div className={`${CLAY_CARD} p-8 max-w-[280px]`}>
                    <ShieldCheck className={`w-12 h-12 mx-auto mb-4 ${ACCENT_COLOR}`} />
                      <div className="text-xl font-bold text-blue-900 mb-2">Verified Excellence</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">Serving Thiruvallur District with Pride</div>
                    </div>
                  </div>
                </div>
              </div>
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
                className={`${CLAY_CARD} relative w-full max-w-lg p-10 overflow-hidden`}
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className={`absolute top-6 right-6 p-2 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full transition-all ${CLAY_BUTTON}`}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className={`w-16 h-16 rounded-2xl ${selectedService.color} ${CLAY_BUTTON} flex items-center justify-center mb-8`}>
                  <selectedService.icon className="w-8 h-8" />
                </div>

                <h3 className={`text-xl font-black mb-2 ${PRIMARY_COLOR}`}>{selectedService.title} Service</h3>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">Execution Process</p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    {selectedService.process}
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h5 className="font-bold text-blue-900 mb-3 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Key Steps:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                      <li>• Professional site inspection & audit</li>
                      <li>• High-grade tools & genuine materials</li>
                      <li>• Post-service safety verification</li>
                      <li>• Workspace cleanup & client handover</li>
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className={`w-full mt-8 ${PRIMARY_BG} text-white py-5 rounded-[2rem] font-black ${CLAY_BUTTON}`}
                >
                  Got it, thanks!
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- Testimonials Removed as per request --- */}


        {/* --- CTA Section --- */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-blue-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Expert Professionals at Thiruvallur</h2>
              <p className="text-blue-200 mb-10 text-lg max-w-xl mx-auto">Don't let home repairs wait. Join thousands of satisfied households who trust ONYO.</p>
              <button className={`${ACCENT_BG} text-white px-10 py-5 rounded-full font-black text-xl ${CLAY_BUTTON}`}>
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`${ACCENT_BG} p-1.5 rounded-lg`}>
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xl font-bold tracking-tight ${PRIMARY_COLOR}`}>ONYO</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Thiruvallur District's leading service marketplace connecting you with the finest verified local professionals.
                </p>
                <div className="flex space-x-4">
                  {['fb', 'tw', 'ig', 'li'].map(social => (
                    <div key={social} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center text-xs font-bold uppercase">
                      {social}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Services</h6>
                <ul className="space-y-4 text-sm font-semibold text-gray-600">
                  <li className="hover:text-blue-900 cursor-pointer">Electricians</li>
                  <li className="hover:text-blue-900 cursor-pointer">Plumbers</li>
                  <li className="hover:text-blue-900 cursor-pointer">Home Cleaning</li>
                  <li className="hover:text-blue-900 cursor-pointer">AC Services</li>
                  <li className="hover:text-blue-900 cursor-pointer">Mechanical Help</li>
                </ul>
              </div>

              <div>
                <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Contact Us</h6>
                <ul className="space-y-4 text-sm font-semibold text-gray-600">
                  <li className="flex items-start">
                    <MapPin className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>Survey 237/3B, Mallivakkam, Jaganathapuram post, Thiruvallur District 602024</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className={`w-5 h-5 mr-3 flex-shrink-0 ${ACCENT_COLOR}`} />
                    <span>support@onyo.in</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-10 border-t border-gray-100 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
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
