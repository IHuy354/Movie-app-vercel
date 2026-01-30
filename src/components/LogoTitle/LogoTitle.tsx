import { Link } from "react-router-dom";

const LogoTitle = () => {
  return (
    <div className="hidden md:flex flex items-center gap-3.5 hover:text-red-500 duration-300 ">
      <img className="h-12" src="/logo.png" />
      <a href="/">
        <h1 className="font-semibold text-4xl">theMovies</h1>
      </a>
    </div>
  );
};

export default LogoTitle;
