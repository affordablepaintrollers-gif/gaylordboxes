import { CheckCircle2 } from 'lucide-react';

const buys = [
  {
    title: 'Double & triple-wall gaylords',
    text: 'Standard 40"x48" footprints, any height or wall rating — once-used, twice-used, or still in original wrap.',
  },
  {
    title: 'Full truckloads',
    text: 'Roughly 450–525 boxes per load. Same-size, same-style loads earn our strongest pricing.',
  },
  {
    title: 'Mixed & sorted lots',
    text: 'Different sizes or wall strengths mixed together? We grade on-site and quote one firm price for the lot.',
  },
  {
    title: 'Bales & floor stock',
    text: 'Baled, stacked loose on the floor, or staged in a shuttered line — we handle every format.',
  },
];

const included = [
  'Trucks, crews, and equipment supplied by us',
  'Pickups scheduled around your dock hours',
  'Same-day payment on every load',
  'Load inventory reports for your records',
  'A dedicated buyer from quote through payment',
  'Freight costs absorbed on qualifying loads',
];

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              What We Buy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Built for bulk quantities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We&apos;re a direct buyer, not a broker taking a middle cut.
              Everything we purchase is resold to box users across the
              country — which is how our pricing consistently beats scrap
              yard and recycler rates.
            </p>

            <div className="mt-8 space-y-6">
              {buys.map((item) => (
                <div key={item.title} className="border-l-2 border-orange-400 pl-5">
                  <h3 className="text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <figure>
              <img
                src="https://images.pexels.com/photos/27111449/pexels-photo-27111449.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Warehouse aisles with stacked gaylord bulk containers"
                className="aspect-[4/3] w-full rounded object-cover shadow-md"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-slate-500">
                Racked gaylords staged for a single-load buyout
              </figcaption>
            </figure>

            <div className="rounded bg-slate-50 p-7 ring-1 ring-slate-200">
              <h3 className="text-base font-bold text-navy-900">
                Every buyout includes:
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure>
              <img
                src="https://images.pexels.com/photos/10834810/pexels-photo-10834810.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Floor stacks of bulk cardboard containers in a distribution warehouse"
                className="aspect-[4/3] w-full rounded object-cover shadow-md"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-slate-500">
                Floor-stacked gaylords — a two-truckload buyout
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
