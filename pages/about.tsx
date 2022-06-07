import Container from '@/components/Container';
import { attributes } from '@/content/pages/about.md';
import { useRouter } from 'next/router';

export default function About() {
  const { locale } = useRouter();
  const { title, presentation } = attributes[locale];

  return (
    <Container>
      <h1>{title}</h1>

    </Container>
  );
}
