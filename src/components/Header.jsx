import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Header() {
  return (
    <header className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8F9FA]/80 to-[#F8F9FA] pointer-events-none" />

      <div className="relative h-full max-w-6xl mx-auto px-4 flex items-start sm:items-center justify-between pt-6 sm:pt-0">
        <div className="space-y-4 sm:space-y-6 mt-20 sm:mt-0">
          <div className="flex items-center gap-3">
            <img
              src="https://assets.pecodo.com/passngo-logo.png"
              alt="Pass N Go"
              className="h-9 w-auto"
            />
            <span className="text-[#737373]">×</span>
            <img
              src="https://assets.pecodo.com/pecodo-logo.png"
              alt="Pecodo"
              className="h-6 w-auto opacity-90"
            />
          </div>

          <div>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#000000]" style={{ fontFamily: 'Poppins, Inter, ui-sans-serif' }}>
              Welcome Pass N Go Instructors 👋
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#1A1A1A] max-w-2xl" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
              Register below to activate your free access to ADI Part 1, 2 & 3 training modules through Pecodo.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-sm text-[#737373] bg-white/70 backdrop-blur px-3 py-2 rounded-full shadow-sm">
          <img
            src="https://assets.pecodo.com/pecodo-logo-mark.png"
            alt="Pecodo"
            className="h-4 w-4"
          />
          <span>Partner Platform Access</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <div className="relative h-4 mb-4">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D1D5DB] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2">
              <div className="w-6 h-[3px] bg-[#2BA63A] rounded-full" />
              <div className="w-6 h-[3px] bg-[#2BA63A] rounded-full" />
              <div className="w-6 h-[3px] bg-[#2BA63A] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
