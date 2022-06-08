import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
}

export default function MarkdownLink({ children, href }: Props) {
  return href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
