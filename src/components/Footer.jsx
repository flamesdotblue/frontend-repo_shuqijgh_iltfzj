import { Github, Mail, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Rocket className="h-5 w-5 text-indigo-600" /> VignanCET
            </div>
            <p className="mt-2 text-sm text-slate-600 max-w-md">
              A polished demo interface for the VignanCET concept. Hook it to your backend to go live.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:hello@vignancet.app" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} VignanCET. All rights reserved.</div>
      </div>
    </footer>
  );
}
