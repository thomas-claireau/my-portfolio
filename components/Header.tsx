import Link from '@/components/Link';
import Menu from './Menu';
import SwitchTheme from './SwitchTheme';

export default function Header() {
  return (
    <header className="dark:bg-dark-600 bg-gray-100 flex justify-between gap-2 p-5 fixed w-full hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,0.1)] transition ease-in-out duration-300">
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
