import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between max-w-7xl items-center mx-auto p-3">
        <h1 className="font-bold text-md sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Yo</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text "
            placeholder="Search..."
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline text-slate-700">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline text-slate-700">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className="hover:underline text-slate-700">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
