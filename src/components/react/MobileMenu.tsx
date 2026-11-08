import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  nav: NavItem[];
  currentPath: string;
}

interface MobileMenuRef {
  open: () => void;
  close: () => void;
}

const MobileMenu = forwardRef<MobileMenuRef, MobileMenuProps>(
  ({ nav, currentPath }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
        setIsAnimating(true);
      },
      close: () => {
        setIsAnimating(false);
        setIsOpen(false);
      },
    }));

    useEffect(() => {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          setIsOpen(false);
          setIsAnimating(false);
        }
      };

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeydown);
        setIsAnimating(true);
      } else {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeydown);
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeydown);
      };
    }, [isOpen]);

    const isActive = (href: string) => {
      return currentPath === href || (href !== '/' && currentPath.startsWith(href));
    };

    if (!isOpen && !isAnimating) return null;

    const handleClose = () => {
      setIsAnimating(false);
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('mobile-menu-close'));
    };

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
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleClose}
          aria-hidden="true"
        />
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-xl transition-transform duration-300 ease-out ${isAnimating ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <h2 id="mobile-menu-title" className="font-body text-sm font-bold text-ink-900">
              Menu
            </h2>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="text-ink-500 hover:text-ink-900 text-xl leading-none p-1"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
          <ul className="p-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="block min-h-12 rounded-xl px-3 py-3 text-sm font-semibold text-ink-900 hover:bg-sea-100"
                  onClick={handleClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact/"
                className="block min-h-12 rounded-xl px-3 py-3 text-sm font-semibold text-ink-900 hover:bg-sea-100"
                onClick={handleClose}
              >
                Contact & early access
              </a>
            </li>
          </ul>
          <div className="p-4 border-t border-stone-200">
            <a
              href="/contact/"
              className="block w-full text-center min-h-12 rounded-full bg-ink-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sea-700"
              onClick={handleClose}
            >
              Join waitlist
            </a>
          </div>
        </div>
      </nav>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;