import { Brain, Users, Trophy, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              About Skill Quiz LAB
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Skill Quiz LAB is a professional desktop quiz application designed for educational institutes.
            Powerful software to conduct assessments, manage student data, and track performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-4 inline-block">
                <Brain className="w-12 h-12 text-indigo-500" />
                <div className="absolute inset-0 blur-xl bg-indigo-500/50 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Desktop Application</h3>
              <p className="text-gray-400">
                Powerful standalone software that works offline. No internet dependency for conducting exams.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-4 inline-block">
                <Users className="w-12 h-12 text-purple-500" />
                <div className="absolute inset-0 blur-xl bg-purple-500/50 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Easy Management</h3>
              <p className="text-gray-400">
                Simple interface to create questions, manage students, and generate instant reports.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-4 inline-block">
                <Trophy className="w-12 h-12 text-pink-500" />
                <div className="absolute inset-0 blur-xl bg-pink-500/50 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Instant Results</h3>
              <p className="text-gray-400">
                Automated grading system with detailed performance analytics and exportable reports.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-4 inline-block">
                <Zap className="w-12 h-12 text-cyan-500" />
                <div className="absolute inset-0 blur-xl bg-cyan-500/50 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-400">
                Data security with local storage. Regular updates and dedicated technical support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30">
          <p className="text-lg text-gray-200 leading-relaxed text-center">
            Our desktop quiz software is trusted by educational institutes across the country. Designed specifically for
            schools, coaching centers, and training institutes who need a reliable assessment tool. Features include
            question bank management, student performance tracking, automated result generation, and comprehensive reporting.
            Perfect for conducting competitive exams, practice tests, and regular assessments.
          </p>
        </div>
      </div>
    </section>
  );
}
