import Link from "next/link";
import React from "react";

interface MenuItem {
  id: number;
  menu: string;
  href: string;
}

interface MenuListProps {
  menu: MenuItem[];
}

const MenuList = ({ menu }: MenuListProps) => {
  return (
    <div className="flex gap-7 mt-2">
      {menu.map((item) => (
        <ul key={item.id} className="hover:none cursor-pointer">
          <li>
            <Link className="font-semibold text-sm" href={item.href}>{item.menu}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MenuList;
