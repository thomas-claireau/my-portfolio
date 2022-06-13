import { useAppContext } from 'AppContext';
import NextLink from 'next/link';

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  file?: string;
  onClick?: (e: Event) => void;
}

export default function Link({
  href = '#', children, file, className, onClick,
}: Props) {
  const { setState } = useAppContext();

  const handleClick = (e) => {
    setState((prevState) => ({ ...prevState, menuOpen: false }));

    if (onClick) {
      onClick(e);
    }
  };

  const renderFileUrl = (fileUrl) => {
    const url = fileUrl.replace('/public', '');

    return url;
  };

  return (
    file
      ? <a href={renderFileUrl(file)} target="_blank" className={`${className} text-lg dark:hover:text-white hover:text-blue`} onClick={handleClick} aria-hidden rel="noreferrer">{children}</a> : (
        <NextLink href={href}>
          <a className={`${className} text-lg dark:hover:text-white hover:text-blue`} onClick={handleClick} aria-hidden>{children}</a>
        </NextLink>
      )

  );
}
