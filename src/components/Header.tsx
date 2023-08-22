"use client";
import React from "react";
import { ModeToggle } from "./toggle-theme";
import UploadBtn from "./UploadBtn";
import MobileSiderBar from "./mobile-sidebar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between p-4 items-center border-b rounded-sm border-gray-300">
        <div className="flex items-center space-x-4">
          <MobileSiderBar className="lg:hidden" />
          <Link href={"/"}>
          <div className="flex items-center space-x-2">
          <Image src={"/logo.png"} width={50} height={50} alt="PicPerfect" />
          <h2 className="text-3xl font-semibold transition-colors text-primary hidden md:flex italic">
            PicPerfect
          </h2>
          </div>
          </Link>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <UploadBtn />
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Header;
