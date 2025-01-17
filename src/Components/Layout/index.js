import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-24 grow py-4">{children}</div>
      <Footer />
    </div>
  );
}
