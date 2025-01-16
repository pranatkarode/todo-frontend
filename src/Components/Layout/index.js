import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-24 grow h-screen">{children}</div>
      <Footer />
    </div>
  );
}
