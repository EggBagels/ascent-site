ASCENT REAL ESTATE — COMPLETE WEBSITE BUILD BRIEF
PROJECT OVERVIEW
Build a premium, single-page commercial real estate website from scratch for Ascent Real Estate, a commercial firm serving property owners, operators, and investors across Oklahoma and the Central United States.
Primary goal: Establish credibility, communicate expertise, generate qualified leads.
Core differentiator: Led by James Timberlake, former Director of Oklahoma State Parks ($1B+ in managed assets), bringing institutional-grade asset management to commercial real estate.

DESIGN PHILOSOPHY
Visual Identity

Architectural minimalism: Clean lines, generous whitespace, restrained color palette
Institutional credibility: Think investment firm or architecture studio, not neighborhood realtor
Premium without pretension: Sophisticated but approachable
Data-driven aesthetic: Emphasis on metrics, efficiency, strategic positioning

Motion Principles

Purposeful, not decorative: Every animation should reinforce the "ascent" metaphor
Smooth and refined: 60fps, transform-only animations, no janky scroll
Restrained: Elegant reveals and parallax, not flashy gimmicks
Accessible: Respect prefers-reduced-motion

Core Metaphor
Mountain ascent = real estate elevation

Climbing = building equity, market positioning, long-term value
Different routes = service offerings (commercial, investment, management, residential)
Higher elevation = greater clarity, strategic perspective
Summit = achieving client goals


TECHNICAL STACK & REQUIREMENTS
Required Technologies

React 19 with TypeScript
Framer Motion for scroll-linked animations and reveals
Tailwind CSS for styling
Vite as build tool (or similar modern bundler)

Performance Targets

Lighthouse score: 90+ across all categories
First Contentful Paint: < 1.5s
Largest Contentful Paint: < 2.5s
Transform-only animations: No layout thrashing
Optimized assets: Compressed images, lazy loading below fold

Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
Mobile-first responsive design
Graceful degradation for older browsers

Accessibility Requirements

WCAG 2.1 AA compliance
Semantic HTML5
Proper heading hierarchy (h1 → h2 → h3)
Alt text on all images
Keyboard navigation
Focus indicators on interactive elements
Form labels and validation
Reduced motion: Disable animations for users with prefers-reduced-motion: reduce


BRAND ASSETS
Logos (Provided)
Three logo files provided in /mnt/user-data/uploads/:

Ascent_Icon_Transparent-02.png — Mountain mark only
Ascent_Logo_horizontal_version_Transparent-02.png — Logo + wordmark horizontal
Ascent_Logo_vertical_version_Transparent-02.png — Logo + wordmark stacked

Usage:

Header: Horizontal version
Footer: Vertical version (or horizontal if space constrained)
Favicon: Icon only

Brand Colors (Extract from Logo)
The logo uses a deep navy blue. Extract the exact hex value and build palette:
javascript// Tailwind config colors
colors: {
  ascent: {
    navy: '#0A1E42',      // Primary brand color (extract exact from logo)
    'navy-light': '#1a3a5c', // Lighter variant for hovers
    'navy-dark': '#050f21',  // Darker variant for depth
  },
  neutral: {
    50: '#f8fafc',   // Light backgrounds
    100: '#f1f5f9',  // Section breaks
    400: '#94a3b8',  // Muted text
    500: '#64748b',  // Body text
    700: '#334155',  // Headings on light bg
    900: '#0f172a',  // Dark overlays
  }
}
Typography
javascript// Google Fonts import
fonts: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
  mono: ['JetBrains Mono', 'Courier New', 'monospace'], // for labels
}
```

**Type Scale**:
- Display (H1): 72px/96px desktop, 48px mobile, serif, font-weight 600
- H2: 48px/64px desktop, 36px mobile, serif, font-weight 500
- H3: 30px/36px desktop, 24px mobile, serif, font-weight 500
- Body: 18px/28px desktop, 16px/24px mobile, sans, font-weight 400
- Small: 14px/20px, sans, font-weight 400
- Label: 12px/16px, mono, uppercase, tracking-widest, font-weight 500

---

## SITE STRUCTURE & SECTIONS

Build as a single-page application with smooth scroll anchoring. Sections should flow vertically with parallax background.

### SECTION 1: HEADER (Persistent)

**Layout**: Fixed header, subtle background blur

**Content**:
```
[Left: Ascent Logo - horizontal version, links to #hero]

[Right: Navigation]
About | Services | Contact

[Mobile: Hamburger menu]
Behavior:

Starts transparent with white text over dark hero
Becomes solid with subtle backdrop-blur on scroll
Nav links smooth-scroll to anchors
Mobile: Drawer menu (slide in from right)

Styling:
css- height: 80px
- backdrop-blur-md when scrolled
- logo: max-height 40px
- nav links: text-sm, uppercase, tracking-wide
- hover: subtle underline animation
- z-index: 50

SECTION 2: HERO
Visual Concept:
Full viewport height, dark gradient overlay on fixed parallax mountain background. User starts at "base camp" with strong contrast for text legibility.
Background System (this is critical):
Create a fixed, full-screen background layer that sits behind all content:
jsx// Pseudo-structure
<div className="fixed inset-0 -z-10 overflow-hidden">
  <motion.div 
    className="absolute w-full h-[150vh]"
    style={{ y: backgroundY }} // Framer Motion transform
  >
    <img 
      src="mountain-image.jpg" 
      className="w-full h-full object-cover object-bottom"
      alt=""
    />
    {/* Gradient overlays for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
  </motion.div>
</div>
Background Parallax Logic:
Use useScroll and useTransform to create slow upward pan:
javascriptconst { scrollYProgress } = useScroll();
const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
As user scrolls down the page, the mountain image slowly pans upward, simulating climbing. This background should be visible behind all sections but with varying overlay opacity.
Hero Content:
jsx<section id="hero" className="relative min-h-screen flex flex-col justify-end pb-32 px-6 md:px-20">
  {/* Dark overlay for this section specifically */}
  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950/90 -z-10" />
  
  <div className="max-w-4xl">
    {/* Label */}
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px w-12 bg-white/40" />
      <p className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
        Base Camp — Elevation 0m
      </p>
    </div>
    
    {/* Headline */}
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
      Strategic Real Estate<br />
      <span className="text-neutral-400">for Serious Investors</span>
    </h1>
    
    {/* Subheadline */}
    <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed border-l-2 border-white/20 pl-6 mb-12">
      Ascent Real Estate delivers disproportionate value at every stage of the ownership cycle—from site selection and capital planning to operational efficiency and long-term asset positioning.
    </p>
    
    {/* CTAs */}
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
      <a href="#contact" className="bg-white text-neutral-900 px-10 py-5 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors duration-300">
        Let's Connect
      </a>
      <a href="#services" className="border-2 border-white/60 text-white px-10 py-5 text-sm font-semibold tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300">
        View Services
      </a>
    </div>
    
    {/* Helper text */}
    <p className="mt-12 text-neutral-400 text-sm">
      Serving Oklahoma and the Central United States
    </p>
  </div>
</section>
Animation Behavior:

Elements fade in and slide up on mount (staggered)
Use Framer Motion's initial, animate, transition
Stagger delay: 0.1s between elements


SECTION 3: CREDENTIALS
Visual: Lighter overlay than hero (simulating higher elevation, more light)
Content:
jsx<section id="credentials" className="relative min-h-screen flex items-center px-6 md:px-20 py-32">
  {/* Medium overlay */}
  <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm -z-10" />
  
  <div className="max-w-7xl mx-auto w-full">
    {/* Section Label */}
    <div className="mb-16">
      <p className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-widest">
        Elevation 1500m — Credentials
      </p>
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-3xl leading-tight">
        Built on Experience.<br />
        <span className="text-neutral-500">Driven by Results.</span>
      </h2>
      <p className="text-neutral-300 text-lg mt-6 max-w-2xl leading-relaxed">
        Led by James Timberlake, former Director of the Oklahoma State Parks Department, where he oversaw more than $1 billion in statewide assets. Ascent brings a disciplined, investor-minded approach to commercial real estate—because we are investors too.
      </p>
    </div>
    
    {/* Three-column stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
      {/* Stat 1 */}
      <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
        <div className="w-12 h-12 mb-6 text-white opacity-80">
          {/* Lucide Shield icon */}
          <Shield className="w-full h-full" />
        </div>
        <h3 className="text-2xl text-white font-medium mb-2">10+ Years</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Licensed Broker & Sales Professional serving commercial and investment clients
        </p>
      </div>
      
      {/* Stat 2 */}
      <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
        <div className="w-12 h-12 mb-6 text-white opacity-80">
          <Target className="w-full h-full" />
        </div>
        <h3 className="text-2xl text-white font-medium mb-2">$1B+ Assets</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Managed in public service as Director of Oklahoma State Parks Department
        </p>
      </div>
      
      {/* Stat 3 */}
      <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
        <div className="w-12 h-12 mb-6 text-white opacity-80">
          <Compass className="w-full h-full" />
        </div>
        <h3 className="text-2xl text-white font-medium mb-2">Multi-State</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Oklahoma licensed with network across the Central United States
        </p>
      </div>
    </div>
  </div>
</section>
Animation: Fade in elements as section enters viewport (use Framer Motion whileInView)

SECTION 4: SERVICES ("PICK YOUR ROUTE")
Visual: Mid-elevation overlay, more light coming through
Content:
jsx<section id="services" className="relative min-h-screen flex items-center px-6 md:px-20 py-32">
  {/* Lighter overlay */}
  <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm -z-10" />
  
  <div className="max-w-7xl mx-auto w-full">
    {/* Section Header */}
    <div className="mb-20 text-center">
      <p className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-widest">
        Elevation 3000m — Services
      </p>
      <h2 className="text-5xl md:text-7xl font-medium text-white mb-6">
        Pick Your Route
      </h2>
      <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
        We guide clients through four core service areas, each designed to maximize value and minimize friction.
      </p>
    </div>
    
    {/* Four Service Cards - 2x2 Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      
      {/* Card 1: Commercial */}
      <article className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500">
        <div className="text-neutral-500 font-mono text-xs mb-6 uppercase tracking-widest">
          Route 01
        </div>
        <h3 className="text-3xl text-white font-medium mb-4">
          Commercial Real Estate
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-6">
          For operators seeking strategic industrial assets. Site selection, operational efficiency, and positioning for long-term performance in evolving markets.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
          Explore Commercial 
          <ArrowRight className="w-4 h-4" />
        </a>
      </article>
      
      {/* Card 2: Investment */}
      <article className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500">
        <div className="text-neutral-500 font-mono text-xs mb-6 uppercase tracking-widest">
          Route 02
        </div>
        <h3 className="text-3xl text-white font-medium mb-4">
          Investment Properties
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-6">
          For investors building portfolios. Capital planning, market analysis, and asset strategy informed by firsthand investing experience.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
          Explore Investment 
          <ArrowRight className="w-4 h-4" />
        </a>
      </article>
      
      {/* Card 3: Property Management */}
      <article className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500">
        <div className="text-neutral-500 font-mono text-xs mb-6 uppercase tracking-widest">
          Route 03
        </div>
        <h3 className="text-3xl text-white font-medium mb-4">
          Property Management
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-6">
          For owners maximizing asset performance. Operational workflows, facility optimization, and cost-effective stewardship of high-value properties.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
          Explore Management 
          <ArrowRight className="w-4 h-4" />
        </a>
      </article>
      
      {/* Card 4: Residential */}
      <article className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500">
        <div className="text-neutral-500 font-mono text-xs mb-6 uppercase tracking-widest">
          Route 04
        </div>
        <h3 className="text-3xl text-white font-medium mb-4">
          Residential
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-6">
          For clients referred by trusted partners. Relationship-focused service for residential transactions within our network.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
          Explore Residential 
          <ArrowRight className="w-4 h-4" />
        </a>
      </article>
      
    </div>
  </div>
</section>
Animation: Cards fade in with slight stagger as section enters view

SECTION 5: ABOUT JAMES
Visual: High elevation, lighter overlay, more brightness
Content:
jsx<section id="about" className="relative min-h-screen flex items-center px-6 md:px-20 py-32">
  {/* Light overlay */}
  <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm -z-10" />
  
  <div className="max-w-6xl mx-auto w-full">
    {/* Section Label */}
    <div className="mb-16">
      <p className="text-xs font-mono text-neutral-300 mb-4 uppercase tracking-widest">
        Elevation 5000m — Leadership
      </p>
      <h2 className="text-4xl md:text-6xl font-medium text-white mb-3">
        Led by James Timberlake
      </h2>
      <p className="text-neutral-300 text-xl">Principal & Managing Broker</p>
    </div>
    
    {/* Two-column layout: Bio + Photo */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left: Bio */}
      <div className="space-y-6 text-neutral-200 text-lg leading-relaxed">
        <p>
          James Timberlake is the principal and managing broker of Ascent Real Estate, a commercial firm dedicated to helping clients achieve their investing goals by providing disproportionate value at every stage of the ownership cycle.
        </p>
        <p>
          With deep expertise in the industrial sector, James advises owners, operators, and investors on how to unlock operational efficiencies, optimize site selection, and position industrial assets for long-term performance in a rapidly evolving market.
        </p>
        <p>
          Prior to founding Ascent, James served as the Director of the Oklahoma State Parks Department, where he oversaw more than $1 billion in statewide assets and led large-scale capital improvement, maintenance, and operational initiatives. This experience managing complex, high-value infrastructure informs his disciplined approach to industrial real estate today.
        </p>
        <p>
          James and his wife Anna live near Harrah, OK with their four children—Lily, Eva, John, and Mae.
        </p>
        
        {/* Credentials Box */}
        <div className="mt-8 p-6 border border-white/20 bg-white/5 rounded-sm">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Broker License</p>
              <p className="text-white font-mono">212011</p>
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Sales License</p>
              <p className="text-white font-mono">204659</p>
            </div>
            <div className="col-span-2">
              <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">State</p>
              <p className="text-white">Oklahoma</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Photo Placeholder */}
      <div className="relative">
        <div className="aspect-[4/5] bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-sm flex items-center justify-center">
          <div className="text-center">
            <User className="w-24 h-24 text-neutral-500 mx-auto mb-4" />
            <p className="text-neutral-400 text-sm">Professional photo<br />to be provided</p>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/10 rounded-sm -z-10" />
      </div>
      
    </div>
  </div>
</section>

SECTION 6: CONTACT
Visual: Near summit or at summit—transition to clean white/light background
Content:
jsx<section id="contact" className="relative py-32 px-6 md:px-20 bg-neutral-50">
  
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-20">
      <p className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">
        Summit — Let's Connect
      </p>
      <h2 className="text-5xl md:text-7xl font-medium text-neutral-900 mb-6">
        Ready to Start Your Ascent?
      </h2>
      <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
        Reach out to discuss your project. We respond to all inquiries within 24 hours.
      </p>
    </div>
    
    {/* Two-column: Contact Info + Form */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Left: Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-medium text-neutral-900 mb-6">Get in Touch</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">Phone</p>
              <a href="tel:4054548795" className="text-xl text-neutral-900 hover:text-ascent-navy transition-colors">
                (405) 454-8795
              </a>
            </div>
            
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:james@ascentrealestate.us" className="text-xl text-neutral-900 hover:text-ascent-navy transition-colors">
                james@ascentrealestate.us
              </a>
            </div>
            
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">Office</p>
              <p className="text-neutral-700 leading-relaxed">
                225 NW 59th St<br />
                Oklahoma City, OK 73118
              </p>
            </div>
            
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">Hours</p>
              <p className="text-neutral-700">
                Mon–Fri: 9am–5pm<br />
                Weekends by Appointment
              </p>
            </div>
          </div>
        </div>
        
        {/* LinkedIn Link */}
        <div className="pt-6 border-t border-neutral-200">
          <a 
            href="https://www.linkedin.com/company/ascentrealestate/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-ascent-navy transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
      
      {/* Right: Contact Form */}
      <div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Name *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              Message *
            </label>
            <textarea 
              id="message" 
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent resize-none"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-ascent-navy text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-ascent-navy-light transition-colors duration-300"
          >
            Send Message
          </button>
          
        </form>
      </div>
      
    </div>
  </div>
</section>
Form Functionality:
Use Web3Forms (free, no backend needed):
javascriptconst handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.append("access_key", "YOUR_WEB3FORMS_KEY");
  formData.append("subject", "New Contact from Ascent Real Estate Website");
  formData.append("from_name", "Ascent Website");
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });
  
  // Handle success/error states
};

SECTION 7: FOOTER
Visual: Clean, minimal, professional
Content:
jsx<footer className="relative bg-neutral-900 text-neutral-300 py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto">
    
    {/* Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      
      {/* Logo + Tagline */}
      <div>
        <img 
          src="/logo-vertical.png" 
          alt="Ascent Real Estate" 
          className="h-32 mb-4"
        />
        <p className="text-sm text-neutral-400 leading-relaxed">
          Strategic real estate for owners, operators, and investors.
        </p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
        <nav className="space-y-2">
          <a href="#about" className="block text-sm hover:text-white transition-colors">About</a>
          <a href="#services" className="block text-sm hover:text-white transition-colors">Services</a>
          <a href="#contact" className="block text-sm hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Contact */}
      <div>
        <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Contact</h4>
        <div className="space-y-2 text-sm">
          <a href="tel:4054548795" className="block hover:text-white transition-colors">
            (405) 454-8795
          </a>
          <a href="mailto:james@ascentrealestate.us" className="block hover:text-white transition-colors">
            james@ascentrealestate.us
          </a>
          <p className="text-neutral-400 mt-4">
            225 NW 59th St<br />
            Oklahoma City, OK 73118
          </p>
        </div>
      </div>
      
    </div>
    
    {/* Bottom Bar */}
    <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
      <p>© 2025 Ascent Real Estate. All rights reserved.</p>
      <p>Broker License 212011 | Oklahoma</p>
    </div>
    
  </div>
</footer>
```

---

## COMPONENT ARCHITECTURE

Organize as follows:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           // Fixed header with nav
│   │   ├── Footer.tsx           // Footer component
│   │   └── Background.tsx       // Fixed parallax background
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Credentials.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Reveal.tsx           // Reusable fade-in component
│       └── SectionLabel.tsx     // "ELEVATION Xm" label component
├── assets/
│   ├── logos/
│   │   ├── icon.png
│   │   ├── horizontal.png
│   │   └── vertical.png
│   └── images/
│       └── mountain-bg.jpg      // Placeholder mountain image
├── App.tsx                      // Main component orchestration
├── index.css                    // Tailwind imports + custom styles
└── main.tsx                     // Entry point

KEY ANIMATIONS & INTERACTIONS
1. Background Parallax
typescript// Background.tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

return (
  <div className="fixed inset-0 -z-10">
    <motion.div 
      style={{ y }}
      className="w-full h-[150vh]"
    >
      <img src={mountainImage} className="w-full h-full object-cover object-bottom" />
    </motion.div>
  </div>
);
2. Scroll-Linked Overlay Fading
Overlays should progressively lighten as user scrolls:
typescriptconst overlayOpacity = useTransform(scrollYProgress, 
  [0, 0.3, 0.6, 1], 
  [0.9, 0.7, 0.4, 0.2]
);
3. Section Reveals
Create reusable Reveal component:
typescript// Reveal.tsx
const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
4. Service Card Hover
css.service-card {
  @apply border border-white/10 bg-white/5;
  @apply hover:border-white/30 hover:bg-white/10;
  @apply hover:-translate-y-2;
  @apply transition-all duration-500;
}
5. Smooth Scroll
typescript// In App.tsx or index.css
html {
  scroll-behavior: smooth;
}

// Or use Framer Motion's scroll utilities for more control
6. Reduced Motion
typescript// Detect and disable animations
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Disable scroll-linked animations
    // Show static version
  }
}, []);

RESPONSIVE BREAKPOINTS
javascript// Tailwind breakpoints
{
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
Mobile-specific considerations:

Hero headline: Reduce to 48px on mobile
Service cards: Stack vertically, full width
About section: Photo stacks below bio on mobile
Contact form: Full width on mobile, side-by-side on desktop
Reduce section padding: py-20 on mobile vs py-32 on desktop


ASSETS NEEDED
Images

Mountain background: High-res (2400px+ width), dramatic mountain/peak, ideally vertical composition

Suggested search: Unsplash "mountain peak vertical" or use the one from original code
Must be optimized (WebP format, ~200-400KB max)


James headshot: Professional photo (will be placeholder initially)

Aspect ratio: 4:5 (portrait)
Resolution: 800x1000px minimum



Icons (from lucide-react)

Shield (credentials)
Target (credentials)
Compass (credentials)
ArrowRight (service cards)
User (photo placeholder)
Linkedin (footer)


SEO & META
html<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Ascent Real Estate | Commercial Property Management Oklahoma</title>
  <meta name="description" content="Strategic commercial real estate and property management in Oklahoma. Led by James Timberlake, former State Parks Director with $1B+ in managed assets." />
  
  <meta property="og:title" content="Ascent Real Estate | Commercial Property Management" />
  <meta property="og:description" content="Strategic real estate for owners, operators, and investors across Oklahoma and the Central US." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://ascentrealestate.us" />
  
  <link rel="icon" href="/icon.png" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>

PERFORMANCE CHECKLIST

 Images optimized (WebP, lazy loading)
 Fonts subset to needed characters
 Tree-shaking enabled (Vite handles this)
 No layout shift (CLS < 0.1)
 Transform-only animations
 Debounced scroll listeners
 Reduced motion support
 Mobile performance tested on real device


DELIVERABLES
Phase 1 (This Build)

✅ Complete React + Framer Motion + Tailwind site
✅ All 6 sections (Hero, Credentials, Services, About, Contact, Footer)
✅ Fixed parallax background with progressive lighting
✅ Real Ascent branding (logos, colors)
✅ Working contact form (Web3Forms integration)
✅ Mobile responsive
✅ Smooth animations with reduced-motion fallback
✅ Professional, production-ready code

Phase 2 (Future Enhancement)

SVG path-tracing "Pick Your Route" animation
Case studies section with real projects
Client testimonials
Blog/insights section
CMS integration (optional)


FINAL NOTES FOR OPUS 4.5
Build approach:

Set up project structure (Vite + React + TypeScript)
Configure Tailwind with custom colors/fonts
Build Background component first (test parallax)
Build sections one by one (Hero → Footer)
Integrate logos and real content
Set up contact form with Web3Forms
Test mobile responsiveness
Test reduced motion
Optimize and deploy-ready

Code quality expectations:

TypeScript for type safety
Clean component separation
Reusable utilities (Reveal, SectionLabel)
Comments for complex logic
No hardcoded values (use Tailwind config)
Accessible HTML (semantic tags, ARIA where needed)

What success looks like:
A beautiful, professional website that feels like a strategic investment firm rather than a typical real estate brokerage. Confident, refined, credible—with just enough motion to feel elevated without being distracting.