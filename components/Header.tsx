import Link from '@/components/Link';
import BurgerMenuSvg from '@/components/ui/BurgerMenuSvg';
import { useAppContext } from 'AppContext';
import Container from '@/components/Container';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Menu from '@/components/Menu';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header() {
  const { state, setState } = useAppContext();

  const visibility = state?.menuOpen ? 'flex' : 'hidden';

  const handleMenu = () => {
    setState((prevState) => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  };

  return (
    <header className="fixed w-full top-0 dark:bg-dark-600 bg-gray-100 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,0.1)] transition-shadow ease-in-out duration-300 z-10">
      <Container className="flex justify-between gap-2">
        <Link href="/" className="font-bold !text-2xl">
          ~/portfolio
        </Link>
        <BurgerMenuSvg className="cursor-pointer sm:hidden" onClick={handleMenu} />
        <div className={`${visibility} p-4 gap-4 items-center text-center flex-col fixed w-full h-fit left-0 top-16 dark:bg-dark-600 bg-white sm:p-0 sm:!flex sm:justify-between sm:relative sm:w-auto sm:h-auto sm:top-0 sm:flex-row sm:bg-transparent`}>
          <Menu />
          <span className="w-0.5 h-2/3 dark:bg-gray bg-dark-600" />
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}
