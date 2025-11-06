import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F8F9FA] py-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
          Pecodo © 2025 — in partnership with Pass N Go Driving School
        </p>
        <p className="text-sm text-[#737373]" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
          Need help? <a href="mailto:support@pecodo.com" className="text-[#2BA63A] hover:underline">support@pecodo.com</a>
        </p>
      </div>
    </footer>
  );
}
