import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          ~/portfolio
        </a>
      </Link>
      <Menu />
    </header>
  );
}
