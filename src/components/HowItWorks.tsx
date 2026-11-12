import { ClipboardCheck, DollarSign, Truck, Banknote } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Send your details',
    text: 'Box count, sizes, condition, and your location — through the quote form or a five-minute call.',
  },
  {
    icon: DollarSign,
    title: 'Receive a firm offer',
    text: 'A real per-box price, typically within one business hour. Valid for 14 days, no surprises at the dock.',
  },
  {
    icon: Truck,
    title: 'We haul it away',
    text: 'We supply the truck — and the crew for floor-loaded boxes — on a pickup window that fits your dock schedule.',
  },
  {
    icon: Banknote,
    title: 'Get paid on pickup',
    text: 'Payment by check, ACH, or wire the same day your boxes are loaded. No net-30, no chasing invoices.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Four steps from full warehouse to empty floor
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A straightforward process built around dock schedules and
            operations teams who have better things to do.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
            >
              <span className="text-sm font-bold text-orange-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <step.icon className="mt-3 h-7 w-7 text-navy-700" />
              <h3 className="mt-4 text-base font-bold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
