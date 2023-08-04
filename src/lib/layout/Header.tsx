import Link from 'next/link';

import { ThemeToggle } from '@/lib/components/theme-toggle';

import AppMenu from './AppMenu';

const Header = () => {
  return (
    <header className="flex h-24 w-full items-center">
      <div className="flex-[60%]">
        <Link href="/">
          <h1 className="text-base font-bold md:text-xl">Public APIs</h1>
          <p className="text-xs text-gray-500">
            Find some public APIs for your next projects
          </p>
        </Link>
      </div>

      <div className="ml-auto flex-[40%] text-right">
        <ThemeToggle />
        <AppMenu />
      </div>
    </header>
  );
};

export default Header;
