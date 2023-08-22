"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CardStackIcon, HeartIcon, ImageIcon } from "@radix-ui/react-icons";

const SiderBar = (searchParams:{searchParams:string}) => {
  const [selected, setSelected] = useState("gallery");
  return (
    <div className="w-[18vw]">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-3xl font-bold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Link href={"/gallery"}>
              <Button
                variant={selected === "gallery" ? "default" : "ghost"}
                className="w-full justify-start gap-2 items-center"
                onClick={() => setSelected("gallery")}
              >
                <ImageIcon width={20} height={20} />
                <span className="text-xl">Gallery</span>
              </Button>
            </Link>
            <Link href={"/albums"}>
              <Button
                variant={selected === "albums" ? "default" : "ghost"}
                className="w-full justify-start gap-2 items-center"
                onClick={() => setSelected("albums")}
              >
                <CardStackIcon width={20} height={20} />
                <span className="text-xl">Albums</span>
              </Button>
            </Link>
            <Link href={"/favourites"}>
              <Button
                variant={selected === "favourites" ? "default" : "ghost"}
                className="flex w-full justify-start gap-2 items-center"
                onClick={() => setSelected("favourites")}
              >
                <HeartIcon width={20} height={20} />
                <span className="text-xl">Favourites</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiderBar;
