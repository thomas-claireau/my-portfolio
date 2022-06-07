import CursorAnimation from '@/components/CursorAnimation';
import SocialIcons from '@/components/SocialIcons';
import { attributes } from '@/content/pages/home.md';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();
  const {
    title, description, socialNetwork, avatar,
  } = attributes[locale];

  console.log(socialNetwork);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Image className="rounded-full border" src={`/${avatar}`} width={128} height={128} objectFit="cover" />
      <h1 className="text-xl font-bold">{title}</h1>
      <CursorAnimation letters={description.split('')} />
      <SocialIcons icons={socialNetwork} />
    </div>
  );
}
