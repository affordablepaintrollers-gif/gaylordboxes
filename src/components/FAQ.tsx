import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is a gaylord box?',
    a: 'A gaylord (also called a bulk container or bulk box) is a large pallet-size corrugated container — typically 40" x 48" at the base and up to 48" tall — used to ship loose or bulk product. They come in single-, double-, and triple-wall strengths, and we buy all of them.',
  },
  {
    q: "What's the minimum you'll buy?",
    a: 'Our focus is truckload quantities — roughly 450 boxes and up — but we regularly buy partial loads and pallet lots depending on your location and box style. Larger loads earn stronger pricing.',
  },
  {
    q: 'What are my boxes worth?',
    a: 'Price depends on quantity, wall strength, condition, and your market. Homogeneous, once-used truckloads in strong freight lanes command the highest rates. Send your details and you\'ll get a firm per-box number — not an estimate that changes at the dock.',
  },
  {
    q: 'Do I have to load the truck?',
    a: 'No. If your boxes are palletized and dock-accessible, our driver handles it. For floor-loaded or loose stacks, we can bring a crew and equipment to load everything ourselves.',
  },
  {
    q: 'How fast can you pick up?',
    a: 'Most pickups are scheduled within 24 to 72 hours of offer acceptance, and we work around your dock schedule — early mornings, late windows, and weekends included.',
  },
  {
    q: 'When do I get paid?',
    a: 'The same day the truck is loaded, by your choice of check, ACH, or wire. No net-30 terms and no waiting period.',
  },
  {
    q: 'My boxes are mixed sizes and some are damaged. Still worth something?',
    a: 'Yes. We buy mixed and lower-grade loads every day. Describe them on the form or send photos — you\'ll get one firm price for the whole lot, graded fairly.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded ring-1 ring-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-navy-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-orange-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] pb-6 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden px-6 text-base leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          Question we didn&apos;t answer? Call{' '}
          <a
            href="tel:+18005550134"
            className="font-semibold text-navy-900 underline decoration-orange-400 decoration-2 underline-offset-2 hover:text-orange-600"
          >
            (800) 555-0134
          </a>{' '}
          — a buyer answers, not a call center.
        </p>
      </div>
    </section>
  );
}
