"use client";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import NavbarMobile from "../navbar/NavbarMobile";
import { useState } from "react";

const Header = () => {
  const [OpenNav, setOpenNav] = useState(false);
  return (
    <header className="flex flex-col items-center   w-full " dir="rtl">
      <div className="  items-cente relative w-full h-[120px] flex justify-center flex-row bg-transparent bg-gradient-to-r from-[#4AB2B3] to-[#DEFEFF] ">
        <div className="image-left  absolute  w-[80px] h-[120px] -left-12 top-0 z-10 ">
          <Image
            src={
              "https://uploads.storage.iran.liara.space/14030101_0155699-copy-236x300.png"
            }
            alt=""
            className="  overflow-hidden cursor-pointer"
            fill={true}
            quality={100}
          />
        </div>
        <div className="image-right relative w-full h-full bg-green-200">
          <Image
            src={"https://uploads.storage.iran.liara.space/header-2.jpg"}
            alt=""
            className="  overflow-hidden cursor-pointer"
            fill={true}
            quality={100}
          />
        </div>
      </div>
      <div
        className={` absolute z-20 md:hidden  right-2 top-2 bg-[#0F6983] rounded-md flex justify-center items-center text-lg p-2 text-white ${
          OpenNav && "w-[98%]"
        }`}
        onClick={() => setOpenNav(!OpenNav)}
      >
        <i
          className={`bi bi-list text-2xl font-bold md:hidden flex cursor-pointer ${
            OpenNav && "hidden"
          }`}
        ></i>
        {OpenNav && <NavbarMobile />}
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
