
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 text-sm py-8 text-center border-t border-slate-900">
      <p>© {new Date().getFullYear()} Matrix Brand Axle. All Rights Reserved.</p>
    </footer>
  );
}
