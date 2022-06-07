import { attributes } from '@/content/global/menu.md';
import Link from '@/components/Link';
import { useRouter } from 'next/router';

export default function Menu() {
  const { locale } = useRouter();
  const { items } = attributes[locale];

  return (
    <nav className="flex justify-between gap-6 flex-col sm:flex-row">
      {items?.map(({ title, url, file }, index) => (
        <Link key={index} href={url} file={file}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
