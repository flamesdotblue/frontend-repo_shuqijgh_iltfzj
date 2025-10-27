import { Upload, FileText, Timer, BarChart3, Shuffle, CheckCircle2, Users, Mail, Cpu, Shield } from 'lucide-react';

const features = [
  {
    title: 'Question Uploads',
    desc: 'Upload Word/PDF files with subjects, topics, difficulty, options, and answers.',
    icon: Upload,
  },
  {
    title: 'Balanced Paper Generation',
    desc: 'Automatically assemble papers that cover all topics with easy/medium/hard mix.',
    icon: Cpu,
  },
  {
    title: 'Randomized for Each Student',
    desc: 'Every student receives a unique order of questions to reduce bias.',
    icon: Shuffle,
  },
  {
    title: 'Timed Mock Tests',
    desc: 'Conduct secure, timed MCQ tests across Maths, Physics, and Chemistry.',
    icon: Timer,
  },
  {
    title: 'Instant Evaluation',
    desc: 'Immediate scoring with correct vs wrong breakdown and topic-wise insights.',
    icon: CheckCircle2,
  },
  {
    title: 'Leaderboards & Analytics',
    desc: 'Track top performers, see who attempted, and export results as CSV/PDF.',
    icon: BarChart3,
  },
  {
    title: 'Registration & Credentials',
    desc: 'Collect sign-ups, auto-generate IDs and passwords, and email them.',
    icon: Mail,
  },
  {
    title: 'Secure Admin Controls',
    desc: 'Create/activate tests, manage students, and monitor progress.',
    icon: Shield,
  },
  {
    title: 'Student-friendly Portal',
    desc: 'Simple, responsive interface for taking tests from any device.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need for CET mocks</h2>
          <p className="mt-3 text-slate-600">From content upload to evaluation and ranking — designed for accuracy, fairness, and speed.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-slate-600 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="roles" className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-indigo-600 text-white p-2"><FileText className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-slate-900">Admin</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Upload questions from Word/PDF</li>
              <li>Activate tests and monitor attempts</li>
              <li>Track scores, analytics and export results</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-emerald-600 text-white p-2"><Users className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-slate-900">Student</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Receive login by email after registration</li>
              <li>Take timed MCQ tests with 3 sections</li>
              <li>See instant results and get a PDF summary</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
