import { Banknote, CalendarClock, Handshake, MapPinned } from 'lucide-react';

const reasons = [
  {
    icon: Banknote,
    title: 'Better than scrap-yard rates',
    text: 'Recyclers pay bale prices for your boxes. We resell usable gaylords to end users, so the per-box price is significantly higher — and quoted firm.',
  },
  {
    icon: CalendarClock,
    title: 'Pickups within days, not weeks',
    text: 'Most trucks are scheduled within 24–72 hours of offer acceptance, and we work around your dock hours, including early and late windows.',
  },
  {
    icon: Handshake,
    title: 'One dedicated buyer',
    text: 'The person who quotes your load is the person who makes sure the truck arrives and your payment clears. No call centers, no handoffs.',
  },
  {
    icon: MapPinned,
    title: '48-state carrier network',
    text: 'Regional carrier partners in every market keep freight costs low — savings we pass along in a higher per-box price.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The buyer operations teams keep on file
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 rounded bg-navy-800/70 p-7 ring-1 ring-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-orange-500/15 text-orange-400">
                <reason.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded bg-navy-800/70 p-8 ring-1 ring-white/10">
          <p className="text-lg font-medium leading-relaxed text-slate-100 sm:text-xl">
            &ldquo;We consolidated two plants and had three truckloads of
            gaylords sitting in the way. Called Monday, had a firm price that
            afternoon, trucks loaded Wednesday, and the wire hit before the
            weekend. Our recycler had quoted us half of what these guys
            paid.&rdquo;
          </p>
          <footer className="mt-5 text-sm text-slate-400">
            <span className="font-semibold text-white">Mike R.</span> ·
            Operations Manager, Food &amp; Beverage Distribution
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
