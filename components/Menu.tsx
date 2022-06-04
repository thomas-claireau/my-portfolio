import { attributes } from '@/content/global/menu.md';
import Link from '@/components/Link';
import { useRouter } from 'next/router';

export default function Menu() {
  const { locale } = useRouter();
  const { items } = attributes[locale];

  return (
    <nav className="flex justify-between gap-6 flex-col sm:flex-row">
      {items?.map((item, index) => (
        <Link key={index} href={item.url}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
