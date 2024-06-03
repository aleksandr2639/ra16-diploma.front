import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";

import Banner from "./Banner";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default Layout;
