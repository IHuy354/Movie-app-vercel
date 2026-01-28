import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-black">
      <Navigation />
      <div className="  text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
