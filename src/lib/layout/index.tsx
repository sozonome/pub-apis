import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="duration-500 ease-out">
      <div className="mx-auto my-0 flex min-h-screen w-full max-w-7xl flex-wrap p-8">
        <Header />
        <main className="my-[22px] w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
