type Props = {
  children: React.ReactNode;
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`p-5 md:container md:mx-auto ${className}`}>
      {children}
    </div>
  );
}
