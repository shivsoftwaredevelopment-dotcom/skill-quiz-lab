import { Target, Rocket, Heart, Globe } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to revolutionizing education through engaging and accessible quiz experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative">
              <div className="mb-6 inline-block">
                <Target className="w-16 h-16 text-purple-500" />
                <div className="absolute inset-0 blur-2xl bg-purple-500/50 -z-10"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the world's leading quiz platform that transforms learning into an exciting journey
                of discovery. We envision a future where knowledge is accessible, engaging, and fun for everyone,
                regardless of age or background.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-10 border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative">
              <div className="mb-6 inline-block">
                <Rocket className="w-16 h-16 text-indigo-500" />
                <div className="absolute inset-0 blur-2xl bg-indigo-500/50 -z-10"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower learners worldwide by providing an innovative, interactive platform that makes
                education enjoyable and effective. We strive to create a community where curiosity thrives
                and knowledge knows no bounds.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Heart className="w-12 h-12 text-pink-500" />
                  <div className="absolute inset-0 blur-xl bg-pink-500/50 -z-10"></div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Passion for Learning</h4>
                <p className="text-gray-400 leading-relaxed">
                  We believe that education should ignite passion and curiosity. Our platform is designed
                  to inspire learners to explore new topics and challenge themselves continuously.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Globe className="w-12 h-12 text-cyan-500" />
                  <div className="absolute inset-0 blur-xl bg-cyan-500/50 -z-10"></div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Global Impact</h4>
                <p className="text-gray-400 leading-relaxed">
                  With users from over 150 countries, we're building a global community of learners
                  who share knowledge, compete fairly, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
