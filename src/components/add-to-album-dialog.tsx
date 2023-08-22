import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { addImageToAlbum, getFolders } from "@/utils/actions";
import { Folder } from "@/app/albums/page";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "./ui/use-toast";

export function AddToAlbumDialog({ image }: { image: string }) {
  const [albums, setAlbums] = useState<Folder[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string>("");

  useEffect(() => {
    async function fetchAlbums() {
      const albumsData = await getFolders();
      setAlbums(albumsData);
    }

    fetchAlbums();
  }, []);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          variant="ghost"
          className="hover:bg-gray-100 hover:text-black space-x-1 items-center"
        >
          <PlusIcon  height={20} width={20}/>
          <span>Add To Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-black">
        <DialogHeader>
          <DialogTitle>Add To Album</DialogTitle>
          <DialogDescription>Add This Image To An Album</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Select
              onValueChange={(newValue) => {
                setSelectedAlbum(newValue);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Album" />
              </SelectTrigger>
              <SelectContent className="space-y-3">
                {albums.map((album: Folder) => (
                  <SelectItem key={album.path} value={album.name}>
                    {album.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              onClick={async () => {
                const result: any = await addImageToAlbum(image, selectedAlbum);
                if (result.statusCode === 200) {
                  toast({
                    variant: "success",
                    title: "Success!!",
                    description: "Image Added To Album Successfully.",
                  });
                } else {
                  toast({
                    variant: "destructive",
                    title: "Something Bad Happened!!",
                    description: "There was an error adding image to album.",
                  });
                }
              }}
            >
              Add To Album
            </Button>
          </DialogClose>
        </DialogFooter>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
