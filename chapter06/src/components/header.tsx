'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'Home', href: '/' },
  { title: 'PlayerList', href: '/player' },
  { title: 'PlayerCreate', href: '/player/create' },
];

export const Header = function () {
  const pathName = usePathname();

  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">NextJSアプリ</h1>
      <div className="flex justify-around flex-wrap p-2">
        {links.map((e, i) => (
          <Link
            key={i}
            href={e.href}
            className={
              pathName === e.href
                ? 'text-red-600 hover:text-red-600'
                : 'text-blue-600 underline hover:text-red-600'
            }
          >
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
