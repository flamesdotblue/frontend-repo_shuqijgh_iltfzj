import { useState } from 'react';
import { Menu, X, GraduationCap, User, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Exam', href: '#exam' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#about" className="flex items-center gap-2 font-semibold text-slate-900">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            VignanCET
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="#admin" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                <Shield className="h-4 w-4" /> Admin
              </a>
              <a href="#admissions" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                <User className="h-4 w-4" /> Apply Now
              </a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href="#admin" className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                <Shield className="h-4 w-4" /> Admin
              </a>
              <a href="#admissions" className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                <User className="h-4 w-4" /> Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
