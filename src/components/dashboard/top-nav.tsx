'use client';

import { UserNav } from './user-nav';

export function TopNav() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
      <div className="h-16 flex items-center justify-between px-4">
        <div />
        <div className="flex items-center gap-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
