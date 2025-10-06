import { Brain, Users, Trophy, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              About QuizMaster
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            QuizMaster is a cutting-edge quiz platform designed to make learning fun, engaging, and competitive.
            We believe in the power of knowledge and the thrill of healthy competition.
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
              <h3 className="text-2xl font-bold text-white mb-3">Smart Learning</h3>
              <p className="text-gray-400">
                Adaptive quizzes that adjust to your knowledge level for optimal learning experience.
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
              <h3 className="text-2xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">
                Join thousands of quiz enthusiasts and challenge friends in real-time battles.
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
              <h3 className="text-2xl font-bold text-white mb-3">Achievements</h3>
              <p className="text-gray-400">
                Earn badges, climb leaderboards, and showcase your expertise in various topics.
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
              <h3 className="text-2xl font-bold text-white mb-3">Fast & Fun</h3>
              <p className="text-gray-400">
                Quick rounds, instant feedback, and exciting animations keep you engaged.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30">
          <p className="text-lg text-gray-200 leading-relaxed text-center">
            Our platform combines education with entertainment, making it easy to learn new things while having fun.
            Whether you're a student preparing for exams, a professional looking to upskill, or simply someone who loves trivia,
            QuizMaster offers something for everyone. With our innovative scoring system, personalized recommendations,
            and social features, learning has never been more exciting.
          </p>
        </div>
      </div>
    </section>
  );
}
