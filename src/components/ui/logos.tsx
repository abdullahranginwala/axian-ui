'use client';

import Link from 'next/link';

export function MinimalistLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10 border-2 border-gray-900 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-light text-gray-900">a</span>
        </div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <span className="text-xl">
        <span className="font-light text-gray-400">ax</span>
        <span className="font-bold text-gray-900">ian</span>
      </span>
    </Link>
  );
}
