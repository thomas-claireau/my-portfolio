import Link from '@/components/Link';
import { useAppContext } from 'AppContext';
import { useRouter } from 'next/router';
import FlagEnSvg from './ui/FlagEnSvg';
import FlagFrSvg from './ui/FlagFrSvg';

export default function LanguageSwitcher() {
  const { setState } = useAppContext();

  const router = useRouter();
  const {
    pathname, asPath, query, locale,
  } = router;

  const Flag = locale === 'en' ? FlagFrSvg : FlagEnSvg;

  const handleLanguage = (e) => {
    e.preventDefault();

    const nextLocale = locale === 'en' ? 'fr' : 'en';

    setState((prevState) => ({ ...prevState, animateCursor: true }));
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <Link className="border-dark-600 border-solid rounded-full overflow-hidden" onClick={handleLanguage}>
      <Flag className="min-w-[1.2rem] min-h-[1.2rem] w-[1.2rem] h-[1.2rem] scale-125" />
    </Link>
  );
}
