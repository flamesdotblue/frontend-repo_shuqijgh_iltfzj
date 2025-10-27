import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <main>
        <section className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <Stat value="3" label="Subjects: MPC" />
              <Stat value="100%" label="Automated Evaluation" />
              <Stat value="Live" label="Leaderboard Ready" />
            </div>
          </div>
        </section>
        <Features />

        <section id="leaderboard" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Leaderboard Preview</h2>
              <p className="mt-3 text-slate-600">When connected to the backend, this section shows top performers with section-wise accuracy and time efficiency.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((rank) => (
                <div key={rank} className="rounded-xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-sm text-slate-500">Rank #{rank}</div>
                  <div className="mt-2 text-xl font-semibold">Student {rank}</div>
                  <div className="mt-3 h-2 w-full bg-slate-100 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${80 - (rank - 1) * 10}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-500">Score: {80 - (rank - 1) * 10}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
