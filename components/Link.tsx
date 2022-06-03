import { useAppContext } from 'AppContext';
import NextLink from 'next/link';

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: Event) => void;
}

export default function Link({
  href = '#', children, className, onClick,
}: Props) {
  const { setState } = useAppContext();

  const handleClick = (e) => {
    setState((prevState) => ({ ...prevState, menuOpen: false }));

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <NextLink href={href}>
      <a className={`${className} text-lg dark:hover:text-white hover:text-blue`} onClick={handleClick} aria-hidden>{children}</a>
    </NextLink>
  );
}
