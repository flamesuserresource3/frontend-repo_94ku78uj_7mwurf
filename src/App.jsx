import React from 'react';
import Header from './components/Header.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A]">
      <Header />

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-4 -mt-24 mb-16">
          <RegistrationForm />
        </section>

        <section className="max-w-5xl mx-auto px-4 mb-20">
          <TrustSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
