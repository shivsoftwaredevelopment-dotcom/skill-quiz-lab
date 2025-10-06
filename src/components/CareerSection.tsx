import { Briefcase, Code, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function CareerSection() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 flex justify-center items-center gap-2">
          <Briefcase className="w-8 h-8 text-indigo-400" />
          Career Opportunities
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Join our team of innovators and tech enthusiasts shaping the future of digital learning.
        </p>

        <div className="flex justify-center">
          <a
            href="https://skill-quiz-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-slate-800/80 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
