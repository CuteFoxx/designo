import {Outlet, ScrollRestoration} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import GetInTouchform from "../../components/GetInTouchForm/GetInTouchForm.tsx";

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

        <ScrollRestoration/>
    </>
  );
};

export default Root;
