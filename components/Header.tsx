import Link from '@/components/Link';
import Menu from './Menu';
import SwitchTheme from './SwitchTheme';

export default function Header() {
  return (
    <header className="dark:bg-dark-600 flex justify-between gap-2 p-5 fixed w-full">
      <Link href="/" className="font-bold !text-2xl">
        ~/portfolio
      </Link>
      <div className="flex justify-between items-center gap-4">
        <Menu />
        <span className="w-0.5 h-2/3 dark:bg-gray bg-dark-600" />
        <SwitchTheme />
      </div>
    </header>
  );
}
