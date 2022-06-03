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
  return (
    <NextLink href={href}>
      <a className={`${className} text-lg dark:hover:text-white hover:text-blue`} onClick={onClick} aria-hidden>{children}</a>
    </NextLink>
  );
}
