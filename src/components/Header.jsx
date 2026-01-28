import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
                text-gray-400 border-b-[3px] border-b-transparent 
                ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
                text-gray-400 border-b-[3px] border-b-transparent 
                ${pathMatchRoute("/signin") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
                text-gray-400 border-b-[3px] border-b-transparent 
                ${pathMatchRoute("/signup") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </li>

            <li className="py-3 text-sm font-semibold border-b-[5px] border-b-red-500">
              Test
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}