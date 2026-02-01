import { Link } from "react-router-dom";
import { 
  Shield, 
  AlertTriangle, 
  CloudLightning,
  Bell,
  Navigation,
  Users,
  ChevronRight,
  CheckCircle,
  Globe,
  Satellite,
  MessageSquare,
  Map
} from "lucide-react";

export default function Landing() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-900 scroll-smooth font-sans">

      {/* ================= ENHANCED NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo with icon */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DisasterAlert
            </h1>
          </div>

          {/* Center links with hover effects */}
          <div className="hidden md:flex gap-8">
            {[
              { href: "#home", label: "Home", icon: "🏠" },
              { href: "#features", label: "Features", icon: "✨" },
              { href: "#about", label: "About", icon: "ℹ️" },
              { href: "#awareness", label: "Awareness", icon: "⚠️" },
              { href: "#contact", label: "Contact", icon: "📞" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <span className="opacity-70 group-hover:opacity-100">{item.icon}</span>
                <span className="font-medium relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Right buttons with modern design */}
          <div className="flex gap-3 items-center">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-blue-600 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-medium text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium text-sm group"
            >
              <span className="flex items-center gap-1">
                Get Started
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </nav>


      {/* ================= ENHANCED HERO WITH BACKGROUND IMAGE ================= */}
      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5475765/pexels-photo-5475765.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30">
            <AlertTriangle className="h-4 w-4" />
            Real-time Disaster Monitoring System
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Stay Safe
            </span>
            <br />
            <span className="text-white">When It Matters Most</span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Advanced disaster management system providing real-time alerts, weather tracking, 
            and emergency resources to keep communities safe and informed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="group px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              to="/login"
              className="group px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/10 hover:border-white/80 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Demo Dashboard
              </span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Multi-Channel Alerts</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Global Coverage</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FEATURES WITH IMAGES ================= */}
      <section
        id="features"
        className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Advanced Features
              </span>
              <br />
              <span className="text-gray-800">For Comprehensive Protection</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to prepare, respond, and recover from disasters
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Real-time weather monitoring dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <Satellite className="h-8 w-8 text-blue-600" />
                    <div>
                      <div className="font-bold text-lg">Live Satellite Feed</div>
                      <div className="text-sm text-gray-600">Updated every 5 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Real-Time Weather Intelligence
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Get accurate, up-to-the-minute weather data with our advanced satellite integration 
                and AI-powered prediction models.
              </p>
              <ul className="space-y-4">
                {[
                  "Live satellite imagery from multiple sources",
                  "AI-powered disaster prediction",
                  "Historical data analysis",
                  "Custom alert thresholds"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Bell className="h-8 w-8" />}
              title="Instant Alerts"
              desc="Multi-channel emergency notifications via SMS, email, and push"
              image="https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <FeatureCard
              icon={<Navigation className="h-8 w-8" />}
              title="Safety Navigation"
              desc="Find nearby shelters and emergency services with live routing"
              image="https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Community Reports"
              desc="Real-time incident reports from verified community members"
              image="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>


      {/* ================= ABOUT WITH MAP VISUALIZATION ================= */}
      <section
        id="about"
        className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Global Coverage
                </span>
                <br />
                <span className="text-gray-800">Monitoring Worldwide</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our platform monitors disaster activity across 150+ countries, providing 
                localized alerts and support in multiple languages.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 global monitoring center",
                  "Localized alert systems",
                  "Multi-language support",
                  "Government agency integration",
                  "Real-time incident mapping"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="p-1 bg-blue-100 rounded-full">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Global disaster monitoring map"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Active Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= AWARENESS WITH DISASTER IMAGES ================= */}
      <section
        id="awareness"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Disaster Preparedness
              </span>
              <br />
              <span className="text-gray-800">Knowledge Saves Lives</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential safety information for different disaster scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DisasterCard
              title="Earthquake"
              image="https://images.pexels.com/photos/1170066/pexels-photo-1170066.jpeg?auto=compress&cs=tinysrgb&w=600"
              tips={["Drop, cover, hold on", "Stay away from windows", "Use stairs, not elevators"]}
              color="from-orange-500 to-red-500"
            />
            <DisasterCard
              title="Flood"
              image="https://images.pexels.com/photos/41178/flood-water-disaster-nature-41178.jpeg?auto=compress&cs=tinysrgb&w=600"
              tips={["Move to higher ground", "Avoid walking in water", "Don't drive through floods"]}
              color="from-blue-500 to-cyan-500"
            />
            <DisasterCard
              title="Wildfire"
              image="https://images.pexels.com/photos/158371/wildfire-smoke-fire-smoke-clouds-158371.jpeg?auto=compress&cs=tinysrgb&w=600"
              tips={["Close all vents", "Wet your roof", "Keep windows closed"]}
              color="from-red-500 to-orange-500"
            />
            <DisasterCard
              title="Storm"
              image="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600"
              tips={["Stay indoors", "Avoid electrical equipment", "Monitor weather updates"]}
              color="from-purple-500 to-indigo-500"
            />
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Trusted Worldwide
              </span>
              <br />
              <span className="text-gray-800">By Emergency Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="DisasterAlert helped us evacuate 10,000 residents safely during the floods last year."
              author="Sarah Chen"
              role="Emergency Services Director"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <TestimonialCard
              quote="The real-time alerts have reduced our response time by 40%. Essential tool for our team."
              author="Michael Rodriguez"
              role="Fire Department Chief"
              image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <TestimonialCard
              quote="As a coastal community, the storm prediction accuracy has been life-saving."
              author="Dr. James Wilson"
              role="Public Health Officer"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Community?
          </h2>
          
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of organizations already using DisasterAlert to keep people safe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start Free 14-Day Trial
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/login"
              className="group px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/80 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule a Demo
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm mt-8">
            No credit card required • Cancel anytime • 24/7 Support
          </p>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-white font-bold text-lg">DisasterAlert</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Advanced disaster management platform keeping communities safe worldwide.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon="📱" />
                <SocialIcon icon="🐦" />
                <SocialIcon icon="📘" />
                <SocialIcon icon="📸" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#api" className="hover:text-white transition">API</a></li>
                <li><a href="#status" className="hover:text-white transition">System Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#docs" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#guides" className="hover:text-white transition">Safety Guides</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#training" className="hover:text-white transition">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@disasteralert.com" className="hover:text-white transition">📧 support@disasteralert.com</a></li>
                <li><a href="tel:+18005551234" className="hover:text-white transition">📞 +1 (800) 555-1234</a></li>
                <li><a href="#emergency" className="text-red-400 hover:text-red-300 transition">🚨 Emergency Hotline</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 DisasterAlert. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}


/* ================= ENHANCED COMPONENTS WITH IMAGES ================= */

function FeatureCard({ icon, title, desc, image }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-transparent transition-all duration-500">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function DisasterCard({ title, image, tips, color }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20`}></div>
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${color} to-transparent h-16`}></div>
        <div className="absolute bottom-4 left-4">
          <h4 className="text-lg font-bold text-white drop-shadow-lg">{title}</h4>
        </div>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="p-0.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-gray-600 text-sm">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={image} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
        />
        <div>
          <div className="font-bold text-gray-800">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-gray-600 text-sm mt-2">{label}</div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
      {icon}
    </button>
  );
}
