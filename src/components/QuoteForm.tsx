import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Phone } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const quantityOptions = [
  '1 – 2 pallets',
  'Less than a truckload',
  '1 truckload (approx. 450–525 boxes)',
  '2–5 truckloads',
  '6–10 truckloads',
  '10+ truckloads / ongoing supply',
];

const conditionOptions = [
  'New / unused',
  'Once-used (like new)',
  'Lightly used',
  'Well used',
  'Mixed / not sure',
];

const inputClass =
  'w-full rounded border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25';

const labelClass = 'block text-sm font-semibold text-slate-700 mb-1.5';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (formState !== 'error') return;
    const t = setTimeout(() => setFormState('idle'), 8000);
    return () => clearTimeout(t);
  }, [formState]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const data = new FormData(e.currentTarget);
    const payload = {
      company: String(data.get('company') || '').trim(),
      contact_name: String(data.get('contact_name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim() || null,
      location: String(data.get('location') || '').trim(),
      quantity: String(data.get('quantity') || ''),
      condition: String(data.get('condition') || '') || null,
      details: String(data.get('details') || '').trim() || null,
    };

    const { error } = await supabase.from('quote_requests').insert(payload);

    if (error) {
      setErrorMessage(
        'Something went wrong sending your request. Please try again, or call (800) 555-0134 and a buyer will take your details over the phone.'
      );
      setFormState('error');
      return;
    }

    setFormState('success');
  }

  return (
    <section id="quote" className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-24">
      <img
        src="https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Semi truck at a warehouse loading dock"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="self-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Get a Quote
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tell us what you have. We&apos;ll take it from there.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Send your details and a buyer will respond with a firm,
              no-obligation offer — most go out within one business hour.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Prefer to talk it through?',
                  text: 'Call (800) 555-0134 and a buyer will take your details over the phone — same fast turnaround.',
                },
                {
                  icon: CheckCircle2,
                  title: 'No obligation, ever',
                  text: 'Our quotes are free and hold for 14 days. If the number doesn\'t work for you, nothing is lost.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Your information stays private',
                  text: 'We use your details only to prepare your offer. We never sell or share them.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-2xl sm:p-9">
            {formState === 'success' ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-navy-900">
                  Request received
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-slate-600">
                  A buyer is reviewing your details now. Your firm offer will
                  be sent shortly — usually within one business hour.
                </p>
                <a
                  href="tel:+18005550134"
                  className="mt-8 inline-flex items-center gap-2 rounded bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4" />
                  In a hurry? Call (800) 555-0134
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy-900">
                  Request your free quote
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClass}>Company name *</label>
                    <input id="company" name="company" required placeholder="Acme Distribution Co." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact_name" className={labelClass}>Your name *</label>
                    <input id="contact_name" name="contact_name" required placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Work email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@acme.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>Facility location (city, state) *</label>
                  <input id="location" name="location" required placeholder="Dallas, TX" className={inputClass} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quantity" className={labelClass}>Approximate quantity *</label>
                    <select id="quantity" name="quantity" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select quantity</option>
                      {quantityOptions.map((q) => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="condition" className={labelClass}>Box condition</label>
                    <select id="condition" name="condition" defaultValue="" className={inputClass}>
                      <option value="">Not sure yet</option>
                      {conditionOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className={labelClass}>Anything else we should know?</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    placeholder="Box dimensions, wall strength, dock hours, deadline to clear the floor..."
                    className={inputClass}
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-start gap-3 rounded bg-red-50 p-4 ring-1 ring-red-200">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded bg-orange-500 px-6 py-4 text-lg font-bold text-white shadow-md shadow-orange-500/25 transition-all hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Get My Quote'
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  No obligation. No spam. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
