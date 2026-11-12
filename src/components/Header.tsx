import { Phone, Menu, X, Package } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'What We Buy', href: '#what-we-buy' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 shadow-lg shadow-navy-950/20 backdrop-blur-md'
          : 'bg-navy-900'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-orange-500 text-white">
            <Package className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            SellGaylordBoxes<span className="text-orange-400">.com</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18005550134"
            className="flex items-center gap-2 text-sm font-semibold text-slate-100 transition-colors hover:text-orange-400"
          >
            <Phone className="h-4 w-4 text-orange-400" />
            (800) 555-0134
          </a>
          <a
            href="#quote"
            className="rounded bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-900 px-4 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-base font-medium text-slate-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+18005550134"
              className="flex items-center gap-2 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-orange-400" /> (800) 555-0134
            </a>
            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded bg-orange-500 px-6 py-3 text-center text-base font-semibold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
