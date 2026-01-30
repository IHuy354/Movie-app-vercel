import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#0f0f0f]">
      <Navigation />
      <div className="  text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
