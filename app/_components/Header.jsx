import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Explore",
      path: "/",
    },
    {
      id: 1,
      name: "Contact Us",
      path: "/",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className=" flex flex-row items-center gap-10 ">
        <Image src="/logo.svg" alt="hero-logo" width={180} height={80} />
        <ul className=" hidden md:flex gap-8">
          {Menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className=" cursor-pointer font-semibold hover:text-primary hover:scale-105 transition-all ease-in-out"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
