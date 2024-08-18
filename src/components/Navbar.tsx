import { useState } from "react";
import { Link } from "react-router-dom";

// Style Constants
const buttonStyle = "flex flex-col gap-1 w-full bg-white rounded-md hover:bg-black hover:text-white border border-gray-500 p-2 px-3 text-black";
const linkStyle = "w-fit";
const navbarStyle = "bg-black p-4 flex basis-1/5 gap-4 rounded-xl flex-row md:flex-col transition-transform duration-300 ease-in-out transform";
const hamStyle = "border m-1 flex w-full h-0 border-white mx-auto";
const hamParentStyle = "fixed top-6 left-4 w-[40px] p-2 bg-black rounded";

// NavButton Component
const NavButton = ({ to, children }:any) => (
  <Link to={to} className={linkStyle}>
    <button className={buttonStyle}>{children}</button>
  </Link>
);

// HamburgerMenu Component
const HamburgerMenu = ({ onClick }:any) => (
  <button onClick={onClick} className={hamParentStyle}>
    <div className={hamStyle}></div>
    <div className={hamStyle}></div>
    <div className={hamStyle}></div>
  </button>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Button */}
      {!isOpen && (

        <HamburgerMenu onClick={toggleNavbar} />
      )}

      {/* Navbar */}
      <nav className={` ${navbarStyle} ${isOpen ? "translate-x-0" : "-translate-x-[150%]"}`}>
        <div className="flex justify-end w-full">
        <div
          onClick={toggleNavbar}
          className="relative w-[25px] h-[25px] text-white"
        >
          <div className="absolute border h-[20px] border-1 rotate-45 top-0 right-2"></div>
          <div className="absolute border h-[20px] border-1 -rotate-45 top-0 right-2"></div>
        </div>
        </div>
        <NavButton to="/contacts">Contacts</NavButton>
        <NavButton to="/chartsAndMaps">Charts & Maps</NavButton>
      </nav>
    </>
  );
};

export default Navbar;
