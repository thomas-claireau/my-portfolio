import { useState, useEffect } from 'react';

type Props = {
  letters: Array<String>
}

export default function CursorAnimation({ letters }: Props) {
  const [items, setItems] = useState([]);

  const randomTime = Math.floor(Math.random() * 50) + 50;
  const isAnimate = letters.length === items.length + 1 ? 'w-[0.1rem] animate-cursor' : 'w-[0.05rem]';

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((oldItems) => {
        if (oldItems && (oldItems.length + 1 !== letters.length)) {
          return [...oldItems, letters[oldItems.length + 1]];
        }
        return oldItems;
      });
    }, randomTime);

    return () => clearInterval(interval);
  }, [letters, randomTime]);

  return (
    <div className="flex gap-1 items-center text-center">
      {items.map((item) => item)}
      <span className={`h-4/6 dark:bg-grey-300 bg-dark-800 ${isAnimate}`} />
    </div>
  );
}
