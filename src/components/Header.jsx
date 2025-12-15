 "use client"
 import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  if(pathName.startsWith("/dashbord"))return <></>
  
  return (
    <header className=" py-6 flex justify-between px-15 border-b items-center border-amber-300">
      <h1 className=" text-3xl font-semibold px-4 py-4">Dev-Profile 🚆</h1>
      <nav className=" flex space-x-5">
        {/* <NavLink href={"/"}>Home</NavLink> */}
        <NavLink href={"/stories"}>Stories</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/tutorials"}>Tutorials</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
        <NavLink href={"/new"}>New Me</NavLink>
      </nav>
    </header>
  );
};

export default Header;
