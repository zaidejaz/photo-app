"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CardStackIcon, HeartIcon, ImageIcon } from "@radix-ui/react-icons";

const SiderBar = () => {
  return (
    <div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-3xl font-bold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Link href={"/gallery"}>
              <Button
                variant={"ghost"}
                className="w-full justify-start gap-2 items-center"
              >
                <ImageIcon width={20} height={20} />
                <span className="text-xl">Gallery</span>
              </Button>
            </Link>
            <Link href={"/albums"}>
              <Button
                variant={"ghost"}
                className="w-full justify-start gap-2 items-center"
              >
                <CardStackIcon width={20} height={20} />
                <span className="text-xl">Albums</span>
              </Button>
            </Link>
            <Link href={"/favourites"}>
              <Button
                variant={"ghost"}
                className="flex w-full justify-start gap-2 items-center"
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
