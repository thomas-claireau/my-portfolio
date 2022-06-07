import { useAppContext } from 'AppContext';
import { useState, useEffect } from 'react';

type Props = {
  letters: Array<string>
}

export default function CursorAnimation({ letters }: Props) {
  const { state, setState } = useAppContext();
  const [items, setItems] = useState([]);

  const randomTime = Math.floor(Math.random() * 50) + 50;
  const isAnimate = letters.length === items.length + 1 ? 'w-[0.1rem] animate-cursor' : 'w-[0.05rem]';

  useEffect(() => {
    setItems([]);
    setState((prevState) => ({ ...prevState, animateCursor: false }));
  }, [state?.animateCursor, setState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((oldItems) => {
        if (oldItems && (oldItems.length !== letters.length)) {
          return [...oldItems, letters[oldItems.length]];
        }
        return oldItems;
      });
    }, randomTime);

    return () => clearInterval(interval);
  }, [letters, randomTime]);

  return (
    <div className="flex h-6 gap-1 items-center text-center">
      {items.map((item) => item)}
      <span className={`h-4/6 dark:bg-grey-300 bg-dark-800 ${isAnimate}`} />
    </div>
  );
}
