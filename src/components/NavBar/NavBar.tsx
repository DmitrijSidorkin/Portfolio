"use client";
import Link from "next/link";
import classNames from "classnames";

import { usePathname } from "next/navigation";

export const NavBar = () => {
  const links = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
    { name: "Tools", route: "/tools" },
  ];
  const pathname = usePathname();
  console.log(pathname);
  const linkClass =
    "hover:bg-sky-800 px-5 py-1 rounded-full select-none text-gray-200 align-middle leading-none text-xl";

  return (
    <nav className="w-full flex justify-center bg-black py-8 mb-20">
      <div className="flex px-1 py-1 gap-1 border-2 border-sky-600 w-fit rounded-full">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              className={classNames(linkClass, {
                "bg-sky-600": link.route === pathname,
              })}
              href={link.route}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
