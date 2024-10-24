import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { FaEarthAmericas } from "react-icons/fa6";
import GetRandomColor from "../../../Hooks/GetRandomColor";
import { AuthContext } from "../../../providers/AuthProvider";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const textColor = GetRandomColor();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-white hover:from-rose-600 hover:to-pink-500 transition duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-xl">
          <div className="flex items-center">
            <Link to="/filters">
              <div className="mx-2">Booking Now</div>
            </Link>
            <div style={{ color: textColor }} className="ml-2 mt-1">
              <FaEarthAmericas size={20} />
            </div>
          </div>
        </div>

        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>{" "}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
