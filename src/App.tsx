import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhatWeBuy from '@/components/WhatWeBuy';
import WhyUs from '@/components/WhyUs';
import QuoteForm from '@/components/QuoteForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeBuy />
        <WhyUs />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
