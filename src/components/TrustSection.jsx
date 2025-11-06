import React from 'react';

const items = [
  { emoji: '🎓', text: 'Full ADI training access' },
  { emoji: '🤝', text: 'Official Pass N Go partner' },
  { emoji: '🚀', text: 'Learn at your own pace' },
];

export default function TrustSection() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              {item.emoji}
            </span>
            <p className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, ui-sans-serif' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
