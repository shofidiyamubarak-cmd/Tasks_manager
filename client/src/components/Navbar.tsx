import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Group 2.png";
import profile from "../assets/Group 6.png";

const linkClass = "font-medium text-[22px] text-[#292929]";

const Navbar = () => {
  const { pathname } = useLocation(); // the current URL path, e.g. "/tasks"

  const allNavLinks = () => {
    return pathname === "/" ? (
      <>
        <Link to="/tasks" className={linkClass}>
          All Tasks
        </Link>
        <Link to="/new" className={linkClass}>
          New Task
        </Link>
      </>
    ) : pathname === "/tasks" ? (
      <Link to="/new" className={linkClass}>
        New Task
      </Link>
    ) : pathname === "/new" || "/edit" ? (
      <Link to="/tasks" className={linkClass}>
        All Tasks
      </Link>
    ) : null;
  };
  return (
    <div className="bg-[#FAF9FB] border-[0.5px] border-[#B8B6B6]">
      <nav className="max-w-360 flex items-center justify-between px-5 md:px-42.5 mx-auto h-23.25">
        <Link to="/">
          <img src={logo} alt="" className="w-32 md:w-auto" />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {allNavLinks()}
          <img src={profile} alt="" className="w-8 md:w-auto" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
