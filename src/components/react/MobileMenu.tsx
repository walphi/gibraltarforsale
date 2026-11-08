import React, { useEffect, useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  nav: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ nav, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    return currentPath === href || (href !== '/' && currentPath.startsWith(href));
  };

  if (isOpen) {
    return (
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="fixed inset-0 z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 h-full w-[min(88vw,360px)] bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <h2 id="mobile-menu-title" className="font-body text-sm font-bold text-ink-900">
              Menu
            </h2>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="text-ink-500 hover:text-ink-900 text-xl leading-none p-1"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto p-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="block min-h-12 rounded-xl px-3 py-3 text-sm font-semibold text-ink-900 hover:bg-sea-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact/"
                className="block min-h-12 rounded-xl px-3 py-3 text-sm font-semibold text-ink-900 hover:bg-sea-100"
                onClick={() => setIsOpen(false)}
              >
                Contact & early access
              </a>
            </li>
          </ul>
          <div className="p-4 border-t border-stone-200">
            <a
              href="/contact/"
              className="block w-full text-center min-h-12 rounded-full bg-ink-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sea-700"
              onClick={() => setIsOpen(false)}
            >
              Join waitlist
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
      className="lg:hidden flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-stone-300 px-4 text-sm font-bold text-ink-900 focus-visible:outline-offset-2"
      onClick={() => setIsOpen(true)}
    >
      <span aria-hidden="true" className="text-sea-700">☰</span>
      <span className="sr-only">Menu</span>
    </button>
  );
}