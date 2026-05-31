'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'Curriculum Vitae' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-white">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-black">
          Tamseel Fatima
        </Link>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
