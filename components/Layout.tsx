import { useAppContext } from 'AppContext';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
    <div className="w-screen min-h-screen flex flex-col justify-between pt-24 dark:bg-dark-100 dark:text-gray-300 text-dark-800">
      <Header />
      <div className={`grow flex justify-center ${isBlur}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
