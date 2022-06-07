type Props = {
  children: React.ReactNode;
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`md:container md:mx-auto ${className}`}>
      {children}
    </div>
  );
}
