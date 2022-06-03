import Link from '@/components/Link';
import { useEffect, useState } from 'react';
import SwitchThemeSvg from './ui/SwitchThemeSvg';

export default function SwitchTheme() {
  const handleTheme = (e: Event) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <Link className="w-[1.2rem] h-100 -rotate-45" onClick={handleTheme}>
      <SwitchThemeSvg />
    </Link>
  );
}
