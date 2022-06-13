import Container from '@/components/Container';
import MarkdownPrint from '@/components/markdown/MarkdownPrint';
import { attributes } from '@/content/pages/about.md';
import { useRouter } from 'next/router';

export default function About() {
  const { locale } = useRouter();
  const { presentation } = attributes[locale];

  return (
    <Container>
      <MarkdownPrint markdown={presentation} />
    </Container>
  );
}
