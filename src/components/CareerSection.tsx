import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';

export default function CareerSection() {
  return (
    <section id="career" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Briefcase className="w-16 h-16 text-indigo-500 mx-auto" />
            <div className="absolute inset-0 blur-2xl bg-indigo-500/50 -z-10"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's revolutionizing online learning. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative mb-4 inline-block">
              <Users className="w-12 h-12 text-indigo-500" />
              <div className="absolute inset-0 blur-xl bg-indigo-500/50 -z-10"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Great Team</h3>
            <p className="text-gray-400">
              Work with talented individuals from around the world in a collaborative environment.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative mb-4 inline-block">
              <TrendingUp className="w-12 h-12 text-purple-500" />
              <div className="absolute inset-0 blur-xl bg-purple-500/50 -z-10"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Growth</h3>
            <p className="text-gray-400">
              Continuous learning opportunities and clear career progression paths.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative mb-4 inline-block">
              <Heart className="w-12 h-12 text-pink-500" />
              <div className="absolute inset-0 blur-xl bg-pink-500/50 -z-10"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Work-Life Balance</h3>
            <p className="text-gray-400">
              Flexible hours, remote work options, and a culture that values your well-being.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Open Positions</h3>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Senior Full Stack Developer</h4>
                  <p className="text-gray-400">Remote • Full-time</p>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">UI/UX Designer</h4>
                  <p className="text-gray-400">Remote • Full-time</p>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Content Creator</h4>
                  <p className="text-gray-400">Remote • Part-time</p>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
