import Spline from '@splinetool/react-spline';
import { PlayCircle, FileText, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[78vh] md:min-h-[86vh] flex items-stretch overflow-hidden">
      {/* Fancy header background with subtle 3D scene */}
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <Spline
            scene="https://prod.spline.design/8h3sQmqK8m5M-0pZ/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Soft gradient wash and accents. Keep pointer-events none so Spline remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white/70 to-pink-50/70" />
        <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-10 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-200">
              VignanCET Entrance Portal
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Your Gateway to Engineering at Vignan
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-700">
              Apply for the entrance exam, explore our programs, and prepare with clear guidelines. Begin your journey toward a world-class engineering education.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#admissions" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700">
                <FileText className="h-5 w-5" /> Apply Now
              </a>
              <a href="#exam" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300/80 bg-white/70 backdrop-blur text-slate-800 hover:bg-white">
                <PlayCircle className="h-5 w-5" /> Exam Guidelines
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300/80 bg-white/70 backdrop-blur text-slate-800 hover:bg-white">
                <Mail className="h-5 w-5" /> Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
