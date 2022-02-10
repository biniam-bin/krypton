import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

//subcomponent
const NvbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

//Main component
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] w-full flex-initial flex justify-between items-center">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="w-32 cursor-pointer"
            srcset=""
          />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutoials", "Wallets"].map(
            (navItem, index) => {
              return <NvbarItem key={index} title={navItem} />;
            }
          )}
        </ul>
        <div className="flex relative ">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[65vw] shadow-2xl h-screen md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose
                  onClick={() => setToggleMenu(false)}
                  className="cursor-pointer"
                />
              </li>
              {["Market", "Exchange", "Tutoials", "Wallets"].map(
                (navItem, index) => {
                  return <NvbarItem key={index} classProps="my-2 text-lg" title={navItem} />;
                }
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
