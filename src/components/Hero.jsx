import Spline from '@splinetool/react-spline';
import { PlayCircle, Trophy, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
    
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8F6l3w7Jt7q5oHPB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-200">
            All-in-one Mock Test Platform
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            VignanCET — Smart Testing for Admins and Students
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600">
            Upload questions, auto-generate balanced papers, conduct timed tests, evaluate instantly, and rank performers — all in one streamlined experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700">
              <PlayCircle className="h-5 w-5" /> See how it works
            </a>
            <a href="#leaderboard" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
              <Trophy className="h-5 w-5" /> View leaderboard
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
              <Mail className="h-5 w-5" /> Get access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
