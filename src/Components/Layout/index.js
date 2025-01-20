import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const [authenicated, setAuthenticated] = useState(true);
  const [timer, setTimer] = useState(3);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      var intervalId = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      navigate("/");
    }
  }, [timer]);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        authenicated ? "" : "justify-center items-center"
      }`}
    >
      {authenicated ? (
        <>
          <Header />
          <div className="px-4 md:px-16 lg:px-24 grow py-4">{children}</div>
          <Footer />
        </>
      ) : (
        <div className="">
          You are not authenicated. Redirecting to login page in {timer}.
        </div>
      )}
    </div>
  );
}
