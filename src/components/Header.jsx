import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" py-6 flex justify-between px-15 border-b items-center border-amber-300">
      <h1 className=" text-3xl font-semibold px-4 py-4">Dev-Profile 🚆</h1>
      <nav className=" flex space-x-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/tutorials"}>Tutorials</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
