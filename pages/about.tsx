import Container from '@/components/Container';
import { attributes } from '@/content/pages/about.md';
import { useRouter } from 'next/router';

export default function About() {
  const { locale } = useRouter();

  console.log(attributes);

  return (
    <Container>
      About
    </Container>
  );
}
