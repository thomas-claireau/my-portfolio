import { attributes } from '@/content/global/menu.md';
import Link from '@/components/Link';

export default function Menu() {
  const { items } = attributes;

  return (
    <nav className="flex justify-between gap-6">
      {items.map((item, index) => (
        <Link key={index} href={item.url}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
