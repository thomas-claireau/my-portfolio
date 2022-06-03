import Link from '@/components/Link';
import { useAppContext } from 'AppContext';
import SwitchThemeSvg from './ui/SwitchThemeSvg';

type State = {
  theme: string;
}

export default function SwitchTheme() {
  const { setState } = useAppContext();

  const handleTheme = (e: Event) => {
    e.preventDefault();

    setState((prevState: State) => ({ ...prevState, theme: prevState.theme === 'light' ? 'dark' : 'light' }));
  };

  return (
    <Link className="w-[1.2rem] h-100 -rotate-45" onClick={handleTheme}>
      <SwitchThemeSvg />
    </Link>
  );
}
