import React from 'react';
import { Database, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div className="text-indigo-650 dark:text-indigo-400">
              <Database size={20} />
            </div>
            <span className="font-extrabold text-slate-805 dark:text-slate-200">
              Sanjay Thomas
            </span>
          </div>

          {/* Shortcuts */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#skills" className="hover:text-indigo-650 dark:hover:text-indigo-400">Skills</a>
            <a href="#experience" className="hover:text-indigo-650 dark:hover:text-indigo-400">Experience</a>
            <a href="#projects" className="hover:text-indigo-650 dark:hover:text-indigo-400">Projects</a>
            <a href="#playground" className="hover:text-indigo-650 dark:hover:text-indigo-400">Playground</a>
            <a href="#certifications" className="hover:text-indigo-650 dark:hover:text-indigo-400">Certifications</a>
            <a href="#contact" className="hover:text-indigo-650 dark:hover:text-indigo-400">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Thomas09022006"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/30 dark:border-slate-800/50 hover:scale-105 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-thomas-22833419b/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/30 dark:border-slate-800/50 hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:sanjaythomas542@gmail.com"
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/30 dark:border-slate-800/50 hover:scale-105 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/30 dark:border-slate-900/60 text-center text-xs text-slate-450 dark:text-slate-500">
          <p>© {currentYear} Sanjay Thomas. All rights reserved. Designed for data science & analytics recruiters.</p>
        </div>
      </div>
    </footer>
  );
}
