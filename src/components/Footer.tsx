import { Phone, Mail, MapPin, Package } from 'lucide-react';

const footerLinks = [
  { label: 'What We Buy', href: '#what-we-buy' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get a Quote', href: '#quote' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-orange-500 text-white">
                <Package className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-base font-bold tracking-tight text-white sm:text-lg">
                SellGaylordBoxes<span className="text-orange-400">.com</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Direct buyer of bulk and truckload quantities of gaylord boxes.
              Firm pricing, fast pickups, same-day payment — nationwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Talk to a Buyer
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+18005550134" className="flex items-center gap-2.5 hover:text-orange-400">
                  <Phone className="h-4 w-4 text-orange-400" /> (800) 555-0134
                </a>
              </li>
              <li>
                <a href="mailto:buy@sellgaylordboxes.com" className="flex items-center gap-2.5 hover:text-orange-400">
                  <Mail className="h-4 w-4 text-orange-400" /> buy@sellgaylordboxes.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400" /> HQ: Dallas, TX — buying nationwide
              </li>
              <li className="text-xs text-slate-500">
                Buying hours: Mon–Fri, 7am–6pm CT
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SellGaylordBoxes.com. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Licensed &amp; insured carrier network
          </p>
        </div>
      </div>
    </footer>
  );
}
