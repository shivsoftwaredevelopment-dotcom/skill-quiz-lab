import { Briefcase, Code, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function CareerSection() {
  const positions = [
    {
      title: 'Senior Quiz Content Creator',
      department: 'Content',
      type: 'Full-time',
      location: 'Remote',
      icon: Lightbulb,
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Hybrid',
      icon: Code,
    },
    {
      title: 'Community Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      icon: Users,
    },
  ];

  return (
    <section id="career" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a revolutionary platform that's changing how people learn and compete
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl p-10 border border-indigo-500/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Why QuizMaster?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Work with cutting-edge technology and innovative team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Flexible remote work options with work-life balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Competitive salary and comprehensive benefits package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Continuous learning and professional development</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Our Culture</h3>
              <p className="text-gray-300 leading-relaxed">
                At QuizMaster, we foster a culture of innovation, collaboration, and continuous growth.
                We believe in empowering our team members to bring their best ideas forward and make
                a real impact on millions of learners worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Join a diverse team of passionate individuals who are dedicated to making education
                accessible and engaging for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h3>
          {positions.map((position, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <position.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 blur-xl bg-indigo-500/30 -z-10"></div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{position.title}</h4>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full border border-indigo-500/30">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full border border-purple-500/30">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-pink-600/30 text-pink-300 rounded-full border border-pink-500/30">
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-200 group-hover:gap-3">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-slate-800/80 transform hover:scale-105 transition-all duration-300">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  );
}
