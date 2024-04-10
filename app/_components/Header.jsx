"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

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
      <div className=" flex flex-row gap-2">
        {user ? (
          <Popover>
            <PopoverTrigger>
              <Image
                src={user?.picture}
                alt="user"
                width={50}
                height={50}
                className=" rounded-full"
              />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="flex flex-col items-center gap-2">
                <li className=" cursor-pointer hover:bg-slate-100 p-2 rounded-sm">
                  Profile
                </li>
                <li className=" cursor-pointer hover:bg-slate-100 p-2 rounded-sm">
                  My booking
                </li>
                <li className=" cursor-pointer hover:bg-slate-100 p-2 rounded-sm">
                  <LogoutLink>Log out</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        ) : (
          <LoginLink>
            <Button>Get Started</Button>
          </LoginLink>
        )}
      </div>
    </div>
  );
}

export default Header;
