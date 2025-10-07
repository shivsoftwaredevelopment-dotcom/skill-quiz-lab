import { Brain, Facebook, Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-indigo-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Brain className="w-10 h-10 text-indigo-500" />
                <div className="absolute inset-0 blur-xl bg-indigo-500/50 -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Skill Quiz LAB
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional desktop quiz software for educational institutes. Trusted by schools and coaching centers.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-indigo-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-pink-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Demo Video
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Skill Quiz LAB. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by the Skill Quiz LAB Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
