import { GraduationCap, BookOpen, ClipboardList, Timer, CheckCircle2, MapPin, BadgePercent, Users } from 'lucide-react';

export default function Features() {
  return (
    <div className="relative">
      {/* Overview */}
      <section id="overview" className="relative py-16 md:py-24 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Choose Vignan?</h2>
              <p className="mt-3 text-slate-600">
                Vignan nurtures innovation, rigor, and real-world readiness. With state-of-the-art labs, industry-driven curriculum, and committed faculty, students build strong foundations and impactful careers.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
                <li>NAAC accredited campus and experienced faculty</li>
                <li>Modern laboratories, research centers, and incubators</li>
                <li>Active clubs, sports, and cultural communities</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Stat icon={GraduationCap} title="95%+" subtitle="Placement Rate" />
                <Stat icon={MapPin} title="20+" subtitle="Acre Smart Campus" />
                <Stat icon={Users} title="200+" subtitle="Recruiting Partners" />
                <Stat icon={BadgePercent} title="Merit" subtitle="Scholarships Available" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Programs Offered</h2>
            <p className="mt-3 text-slate-600">Undergraduate engineering programs designed for depth, breadth, and industry relevance.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Computer Science & Engineering', desc: 'AI, Data, Systems, and Full-Stack tracks.' },
              { title: 'Electronics & Communication', desc: 'VLSI, Embedded, Signal Processing.' },
              { title: 'Electrical & Electronics', desc: 'Power systems, Smart grids, Automation.' },
              { title: 'Mechanical Engineering', desc: 'Design, Manufacturing, Thermal sciences.' },
              { title: 'Civil Engineering', desc: 'Structures, Geotech, Environmental.' },
              { title: 'Information Technology', desc: 'Cloud, DevOps, Web and Mobile.' },
            ].map((p) => (
              <div key={p.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="relative py-16 md:py-24 bg-slate-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Admissions Process</h2>
            <p className="mt-3 text-slate-600">Simple, transparent steps to apply for the entrance exam and secure your seat.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { step: '1', title: 'Registration', desc: 'Fill the online application with basic details and program preferences.' },
              { step: '2', title: 'Hall Ticket', desc: 'Receive hall ticket with exam center/date via email after verification.' },
              { step: '3', title: 'Results & Counselling', desc: 'Check your rank, attend counselling, and confirm admission.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">{s.step}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam */}
      <section id="exam" className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Entrance Exam Overview</h2>
            <p className="mt-3 text-slate-600">Get familiar with the pattern, duration, and evaluation so you can prepare confidently.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-indigo-600 text-white p-2"><ClipboardList className="h-5 w-5" /></div>
                <h3 className="text-xl font-semibold text-slate-900">Pattern & Syllabus</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li>Sections: Mathematics, Physics, Chemistry</li>
                <li>Format: Multiple Choice Questions (MCQs)</li>
                <li>Scoring: +1 for correct, no negative marking</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-emerald-600 text-white p-2"><Timer className="h-5 w-5" /></div>
                <h3 className="text-xl font-semibold text-slate-900">Duration & Evaluation</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li>Duration: 3 hours</li>
                <li>Instant evaluation for mock tests</li>
                <li>Official ranks released post-exam</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-indigo-900">Ready to take the next step?</h4>
              <p className="text-indigo-800/80">Register now to receive your hall ticket and exam updates by email.</p>
            </div>
            <a href="#admissions" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
              <CheckCircle2 className="h-5 w-5" /> Start Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xl font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{subtitle}</div>
      </div>
    </div>
  );
}
