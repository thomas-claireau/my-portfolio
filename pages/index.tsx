import Header from '../components/Header';
import { attributes } from '../content/pages/home.md';

export default function Home() {
  const { title } = attributes;

  return (
    <Header />
  );
}
