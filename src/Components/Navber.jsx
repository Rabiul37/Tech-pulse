import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDarkMode } from "react-icons/Md";
import { HiLightBulb } from "react-icons/Hi";
const Navber = () => {
  const [mode, setMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleHome = () => {};
  const navber = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/AddProduct">Add product</NavLink>
      </li>
      <li>
        <NavLink to="/MyCart">My cart</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>
          <div className="flex items-center gap-2 ml-20 lg:ml-0">
            <img className="w-12" src={logo} alt="" />
            <span className="text-sm font-extrabold text-gray-100 lg:text-3xl">
              Tech <span className="text-[#B1FCFC]">Pulse</span>{" "}
            </span>
          </div>
        </div>
        <div className="navbar-center hidden text-4xl font-semibold text-gray-100 lg:flex">
          <ul className="menu menu-horizontal px-1">{navber}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div>
            {user ? (
              <div className="flex gap-2 items-center">
                <img
                  className="w-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <h1 className=" hidden lg:block text-lg font-semibold text-gray-200">
                  {user?.displayName}
                </h1>
                <button
                  onClick={handleLogOut}
                  className="btn bg-[#2B3440] text-white"
                >
                  Log out
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            className="text-2xl text-gray-200"
            onClick={() => handleHome(setMode(!mode))}
          >
            {mode ? <MdDarkMode></MdDarkMode> : <HiLightBulb></HiLightBulb>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
