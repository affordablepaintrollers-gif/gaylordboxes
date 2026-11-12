import { ArrowRight, Phone } from 'lucide-react';

const stats = [
  { value: '5,000+', label: 'Truckloads purchased' },
  { value: '48 hrs', label: 'Typical pickup time' },
  { value: '48 states', label: 'Nationwide coverage' },
  { value: 'Same day', label: 'Payment on pickup' },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate bg-navy-950 pt-16">
      <img
        src="https://images.pexels.com/photos/34585130/pexels-photo-34585130.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Stacked gaylord bulk containers at an industrial facility"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Bulk &amp; Truckload Gaylord Box Buyouts
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Sell your gaylord boxes with one phone call
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            We buy truckload and bulk quantities of used gaylord boxes from
            warehouses and distribution centers nationwide. We arrange the
            truck and crew, pay the same day we load, and clear your floor
            space — usually within 48 hours.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-3 rounded bg-orange-500 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+18005550134"
              className="inline-flex items-center justify-center gap-2 rounded border border-slate-500/60 px-8 py-5 text-lg font-semibold text-white transition-colors hover:border-slate-400 hover:bg-white/5"
            >
              <Phone className="h-5 w-5 text-orange-400" />
              (800) 555-0134
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Free, no-obligation quotes — most sent within one business hour.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded bg-white/10 backdrop-blur-sm lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy-900/70 p-6">
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
