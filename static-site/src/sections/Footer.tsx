export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-lg font-display font-bold text-gradient">
              NA
            </a>
            <span className="text-white/30 text-xs">
              © {currentYear} Neeor Alam
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#features' },
              { name: 'Work', href: '#showcase' },
              { name: 'Contact', href: '#cta' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-white/20 text-xs">
            Code meets biology
          </div>
        </div>
      </div>
    </footer>
  )
}
