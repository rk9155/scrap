interface Props {
  children: React.ReactNode;
  show: boolean;
}

export default function TabTransition({ children, show }: Props) {
  if (!show) return null;

  return <div className="animate-fade-in animate-slide-in">{children}</div>;
}
