import CursorAnimation from '@/components/CursorAnimation';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import { attributes } from '@/content/pages/home.md';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();
  const {
    title, description, socialNetwork, avatar,
  } = attributes[locale];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link href="/about" passHref>
        <div className="h-[128px] rounded-full shadow-[0_0_0_0.3618rem_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer hover:-translate-y-3 transition-translate ease-in-out duration-[400ms]">
          <Image className="rounded-full" src={`/${avatar}`} width={128} height={128} objectFit="cover" />
        </div>
      </Link>
      <h1 className="text-xl font-bold">{title}</h1>
      <CursorAnimation letters={description.split('')} />
      <SocialIcons icons={socialNetwork} />
    </div>
  );
}
