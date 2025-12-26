export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: 'https://github.com/onesamket/geez-input', label: 'GitHub', external: true },
    { href: 'https://www.npmjs.com/package/geez-input', label: 'NPM', external: true },
    { href: 'https://github.com/onesamket/geez-input/blob/main/LICENSE', label: 'License', external: true },
  ];

  return (
    <footer className="bg-[#16181d] py-12 sm:py-16 px-4 sm:px-6 border-t border-[#343a46]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center text-[#149eca]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-[#149eca]">geez-input</span>
            </div>
            <p className="text-[#99a1b3] text-sm">
              © {currentYear} geez-input. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#ebecf0] text-sm font-medium">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="hover:text-[#149eca] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Description */}
          <p className="text-center text-[#99a1b3] text-sm max-w-2xl px-4">
            The library for Ethiopic web interfaces. Type Latin, get Geez instantly with zero configuration.
          </p>
        </div>
      </div>
    </footer>
  );
}

