"use client";
import React from "react";
import { ModeToggle } from "./toggle-theme";
import UploadBtn from "./UploadBtn";
import MobileSiderBar from "./mobile-sidebar";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between p-4 items-center border-b rounded-sm border-gray-300">
        <div className="flex items-center space-x-2">
          <MobileSiderBar className="lg:hidden" />
          <h2 className="text-3xl font-semibold transition-colors">
            Photo App
          </h2>
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
