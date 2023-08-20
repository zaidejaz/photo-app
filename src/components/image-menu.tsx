import { Button } from "@/components/ui/button";
import {
  HamburgerMenuIcon,
  Pencil1Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";

export function ImageMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-1 hover:bg-gray-400 border-white">
          <HamburgerMenuIcon className="w-6 h-4 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="gap-2">
            <AddToAlbumDialog />
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-3 py-2 hover:bg-gray-100 px-4 font-medium">
            <Pencil1Icon />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
