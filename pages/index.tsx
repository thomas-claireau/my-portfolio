import { useAppContext } from '../AppContext';

import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  const { i18n } = useAppContext();

  const { title } = attributes;

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}
