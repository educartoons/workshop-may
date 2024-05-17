import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="pt-2 pb-2">
      <Navigation />
      {children}
    </div>
  );
}
