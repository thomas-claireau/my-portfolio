import { useAppContext } from 'AppContext';
import { useEffect } from 'react';
import Header from './Header';

export default function Layout({ children }) {
  const { state } = useAppContext();
  const { menuOpen } = state;

  const isBlur = menuOpen ? 'blur-[0.15rem]' : '';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  return (
    <div className="w-screen h-screen pt-24 dark:bg-dark-100 dark:text-gray-300 text-dark-800 transition ease-in-out duration-300">
      <Header />
      <div className={`${isBlur}`}>
        {children}
      </div>
    </div>
  );
}
