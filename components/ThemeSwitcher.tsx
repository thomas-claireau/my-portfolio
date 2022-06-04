import Link from '@/components/Link';
import { useAppContext } from 'AppContext';
import ThemeSwitcherSvg from './ui/ThemeSwitcherSvg';

type State = {
  theme: string;
}

export default function ThemeSwitcher() {
  const { setState } = useAppContext();

  const handleTheme = (e: Event) => {
    e.preventDefault();

    setState((prevState: State) => ({ ...prevState, theme: prevState.theme === 'light' ? 'dark' : 'light' }));
  };

  return (
    <Link className="min-w-[1.2rem] h-100 -rotate-45" onClick={handleTheme}>
      <ThemeSwitcherSvg />
    </Link>
  );
}
