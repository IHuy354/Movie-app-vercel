import { NavLink } from "react-router-dom";
import LogoTitle from "../components/LogoTitle/LogoTitle";
import { useEffect, useState } from "react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex p-2 font-medium transition-colors duration-300 hover:text-red-500 hover:border-b-2 ${isActive ? "border-b-2 border-red-500" : "text-white"}`;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`px-8 fixed z-50 transition-all duration-300 
               ${isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent"}
               top-0 left-0 right-0
               md:top-0 md:bottom-auto
               max-md:top-auto max-md:bottom-0 max-md:bg-black/95 w-full`}
      >
        <nav className=" text-white flex items-center justify-between text-2xl w-full py-4">
          <LogoTitle />
          <div className="flex justify-between w-full  md:justify-end gap-3 text-xl md:text-2xl xl:text-3xl ">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/movie" className={navLinkClass}>
              Movies
            </NavLink>
            <NavLink to="/tv" className={navLinkClass}>
              TV Series
            </NavLink>
          </div>
        </nav>
      </header>

      <div className="h-20"></div>
    </>
  );
};

export default Navigation;
