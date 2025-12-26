import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useGeezMode } from '../providers/geez-mode-provider';
import { StatsDisplay } from './stats-display';

export default function Header() {
  const { setMode, useGeez } = useGeezMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#playground', label: 'Playground' },
    { href: '#frameworks', label: 'Frameworks' },
    { href: '#guide', label: 'Guide' },
    { href: '#form-demo', label: 'Integration' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center z-50 bg-[#23272f]/80 backdrop-blur-md border-b border-[#343a46]/50 supports-backdrop-filter:bg-[#23272f]/80">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#149eca]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight">geez-input</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium text-[#ebecf0]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 xl:px-4 py-2 rounded-full hover:bg-[#343a46] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/onesamket/geez-input"
            target="_blank"
            rel="noreferrer"
            className="px-3 xl:px-4 py-2 rounded-full hover:bg-[#343a46] transition-colors flex items-center gap-2"
          >
            GitHub
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="ml-1">
              <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
            </svg>
          </a>

          {/* Geez/Latin Toggle */}
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-[#343a46]">
            <span className={`text-xs font-medium transition-colors ${useGeez ? 'text-[#f6f7f9]' : 'text-[#5e6677]'}`}>
              Latin
            </span>
            <button
              type="button"
              onClick={() => setMode(useGeez ? 'latin' : 'geez')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#149eca] focus:ring-offset-2 focus:ring-offset-[#23272f] ${
                useGeez ? 'bg-[#149eca]' : 'bg-[#343a46]'
              }`}
              role="switch"
              aria-checked={useGeez}
              aria-label="Toggle between Geez and Latin input mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${
                  useGeez ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-xs font-medium transition-colors ${!useGeez ? 'text-[#f6f7f9]' : 'text-[#5e6677]'}`}>
              Geez
            </span>
          </div>

          <div className="pl-2 ml-2">
            <StatsDisplay />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-[#343a46] transition-colors text-[#ebecf0]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#23272f] border-b border-[#343a46] shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-[#343a46] transition-colors text-[#ebecf0] font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/onesamket/geez-input"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#343a46] transition-colors text-[#ebecf0] font-medium"
            >
              GitHub
              <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
              </svg>
            </a>

            {/* Mobile Toggle */}
            <div className="px-4 py-3 border-t border-[#343a46] mt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#ebecf0]">Input Mode</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium transition-colors ${useGeez ? 'text-[#f6f7f9]' : 'text-[#5e6677]'}`}>
                    Latin
                  </span>
                  <button
                    type="button"
                    onClick={() => setMode(useGeez ? 'latin' : 'geez')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#149eca] ${
                      useGeez ? 'bg-[#149eca]' : 'bg-[#343a46]'
                    }`}
                    role="switch"
                    aria-checked={useGeez}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${
                        useGeez ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className={`text-xs font-medium transition-colors ${!useGeez ? 'text-[#f6f7f9]' : 'text-[#5e6677]'}`}>
                    Geez
                  </span>
                </div>
              </div>
              <StatsDisplay />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

