import { FC, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sticky top-0 z-10 bg-white mb-10">
      <div className="container mx-auto ">
        <div className=" flex items-center  gap-[69px] justify-between mt-5 ">
          <Link to={"/"} className="font-bold text-xl">
            {/* <img
              className="w-[130px] h-[50px] object-contain "
              src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png"
              alt=""
            /> */}
            LOGO
          </Link>

          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-[40px] navbar navbar__collection">
              <NavLink
                className={"text-[16px] font-[500] text-[#0D2612]  "}
                to={"/products"}
              >
                Products
              </NavLink>

              <p className={"text-[16px] font-[500] text-[#0D2612]  "}>
                Brands
              </p>

              <p className={"text-[16px] font-[500] text-[#0D2612]  "}>
                What’s new
              </p>

              <p className={"text-[16px] font-[500] text-[#0D2612]  "}>Sales</p>
              <p className={"text-[16px] font-[500] text-[#0D2612]  "}>Help</p>
              <p className={"text-[16px] font-[500] text-[#0D2612]  "}>About</p>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-5 items-center ">
            <IoSearchOutline className="text-[18px]" />
            <AiOutlineUser className="text-[#000] text-[18px]" />
            <Link to={"/cartProducts"}>
              <GiShoppingCart className="text-[#000] text-[18px]" />
            </Link>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
