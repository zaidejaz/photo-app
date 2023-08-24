"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Pencil1Icon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import Link from "next/link";
import DeleteDialog from "./delete-dialog";
import { FileEdit } from "lucide-react";

export function ImageMenu({ image }: { image: string }) {
  const [menu, setMenu] = useState(false);
  return (
    <DropdownMenu open={menu} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="p-1 hover:bg-gray-400 border-white"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <HamburgerMenuIcon className="w-6 h-4 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40"
        onInteractOutside={() => {
          setMenu(false);
        }}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="gap-2"
            onClick={() => {
              setMenu(false);
            }}
          >
            <AddToAlbumDialog image={image} />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setMenu(false);
            }}
          >
            <Link href={`/edit?image=${image}`} className="flex gap-2 px-2 py-0.5 font-medium">
              <FileEdit width={20} height={20} />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            onClick={() => {
              setMenu(false);
            }}
          >
            <DeleteDialog deleteType="image" image={image} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
