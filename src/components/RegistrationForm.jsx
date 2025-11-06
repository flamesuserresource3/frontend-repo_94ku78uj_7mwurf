import React, { useState } from 'react';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [prn, setPrn] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValid = fullName.trim() && email.trim() && prn.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);

    // Simulate async submission; backend can be wired later if needed
    await new Promise((res) => setTimeout(res, 900));
    setSuccess(true);
    setLoading(false);

    // Clear on success for a fresh state
    setFullName('');
    setEmail('');
    setPrn('');
  }

  return (
    <div className="relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-2 rounded-full bg-[#2BA63A]/80" />
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6 sm:p-8 md:p-10">
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]" style={{ fontFamily: 'Poppins, Inter, ui-sans-serif' }}>
                Activate your access
              </h2>
              <p className="text-sm sm:text-base text-[#737373]" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
                Enter your details below to unlock the ADI Part 1, 2 & 3 training modules.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-[#1A1A1A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#2BA63A]"
                  placeholder="Alex Instructor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-[#1A1A1A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#2BA63A]"
                  placeholder="you@passngo.co.uk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="prn">
                  PRN Number
                </label>
                <input
                  id="prn"
                  type="text"
                  required
                  value={prn}
                  onChange={(e) => setPrn(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-[#1A1A1A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#2BA63A]"
                  placeholder="e.g. 123456"
                />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <p className="text-xs text-[#737373] max-w-xl" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
                Your PRN will be verified with Pass N Go. Only registered PNG instructors can access this training.
              </p>
              <button
                type="submit"
                disabled={!isValid || loading}
                className="inline-flex items-center justify-center rounded-md bg-[#2BA63A] px-5 py-2.5 text-white font-medium hover:bg-[#259434] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting…' : 'Activate My Access'}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-[#E8F6EA] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6 text-[#2BA63A]"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>
            <p className="text-[#1A1A1A] text-base sm:text-lg" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
              ✅ Thanks! Your account request is submitted. You'll receive your login details soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
