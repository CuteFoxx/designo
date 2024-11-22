import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouchform from "../components/GetInTouchForm";

const Root = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <div className="content-bottom">
        <GetInTouchform />
        <Footer />
      </div>
    </>
  );
};

export default Root;
