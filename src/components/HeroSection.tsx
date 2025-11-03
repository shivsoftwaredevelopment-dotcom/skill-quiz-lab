import { Sparkles, Play } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <Sparkles className="w-16 h-16 text-indigo-500 animate-pulse" />
          <div className="absolute inset-0 blur-2xl bg-indigo-500/30 -z-10"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Challenge Your Mind
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional desktop quiz application for institutes. Powerful, feature-rich software to conduct assessments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onStartQuiz}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            Get Demo
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity"></div>
          </button>

          <a
            href="https://appstoreai.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-slate-800/80 transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Download Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-400">Total Institutes Connected</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-400">Question Types</div>
          </div>
        </div>
      </div>
    </section>
  );
}
