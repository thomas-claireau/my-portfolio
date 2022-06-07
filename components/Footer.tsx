import { attributes } from '@/content/global/footer.md';
import { useRouter } from 'next/router';

export default function Footer() {
  const { locale } = useRouter();
  const { credit, copyright } = attributes[locale];

  return (
    <footer className="pb-6 text-center text-sm">
      <p>{credit}</p>
      <p>{copyright}</p>
    </footer>
  );
}
