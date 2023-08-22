import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import {
  CardStackIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  HeartIcon,
  ImageIcon,
} from "@radix-ui/react-icons";

const MobileSiderBar = (props: any) => {
  const [sheetState, setSheetState] = useState(false);
  const handleLinkClick = () => {
    setSheetState(false);
  };
  return (
    <div {...props}>
      <Sheet open={sheetState}>
        <SheetTrigger>
          <HamburgerMenuIcon
          width={30}
          height={30}
          className="border p-1 rounded-sm mt-2"
            onClick={() => {
              setSheetState(true);
            }}
          />
        </SheetTrigger>
        <SheetContent
        side={"left"}
          onInteractOutside={() => {
            setSheetState(false);
          }}
        >
            <h2 className="mb-2 text-3xl font-semibold">
              Discover
            </h2>
          <div className="space-y-1">
            <Link href={"/gallery"}>
              <Button
                variant={"ghost"}
                className="w-full justify-start gap-2 items-center"
                onClick={handleLinkClick}
              >
                <ImageIcon height={20} width={20}/>
                <span className="text-xl">Gallery</span>
              </Button>
            </Link>
            <Link href={"/albums"}>
              <Button
                variant={"ghost"}
                className="w-full justify-start gap-2 items-center"
                onClick={handleLinkClick}
              >
                <CardStackIcon height={20} width={20}/>
                <span className="text-xl">Albums</span>
              </Button>
            </Link>
            <Link href={"/favourites"}>
              <Button
                variant={"ghost"}
                className="flex w-full justify-start gap-2 items-center"
                onClick={handleLinkClick}
              >
                <HeartIcon height={20} width={20}/>
                <span className="text-xl">Favourites</span>
              </Button>
            </Link>
          </div>
          <div
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            onClick={() => {
              setSheetState(false);
            }}
          >
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSiderBar;
