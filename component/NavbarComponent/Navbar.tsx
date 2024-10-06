import Image from "next/image";
import React from "react";
import MenuList from "./MenuList";
import Regbtn from "./RegBtn/Regbtn";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      menu: "Customers",
      href: "#",
    },
    {
      id: 2,
      menu: "Changelog",
      href: "#",
    },
    {
      id: 3,
      menu: "Help",
      href: "#",
    },
    {
      id: 4,
      menu: "Careers",
      href: "#",
    },
    {
      id: 5,
      menu: "Pricing",
      href: "/pricing ",
    },
  ];

  return (
    <div className=" px-2 py-2 bg-white">
      <nav className=" mx-5 flex justify-between gap-1 align-middle">
        <div className="flex justify-between gap-6 align-middle">
          <div>
            <Image alt="logo.svg" src={"/logo.svg"} height={43} width={100} />
          </div>

          <div>
            <MenuList   
            menu={menu}
           
             />
          </div>
        </div>

        <div><Regbtn /></div>
      </nav>
    </div>
  );
};

export default Navbar;
