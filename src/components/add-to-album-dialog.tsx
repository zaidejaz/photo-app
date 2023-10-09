import { useState, useEffect, Suspense } from "react";
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
import { Cross2Icon } from "@radix-ui/react-icons";
import { addImageToAlbum, getFolders } from "@/utils/actions";
import { Folder } from "@/app/albums/page";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "./ui/use-toast";
import { ImagePlus } from "lucide-react";
import LoadingAnimation from "./loading-animation";

export function AddToAlbumDialog({ image }: { image: string }) {
  const [albums, setAlbums] = useState<Folder[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [adding, setAdding] = useState<boolean>(false);
  const [albumsLoading, setAlbumsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchAlbums() {
      setAlbumsLoading(true);
      const albumsData = await getFolders();
      setAlbums(albumsData);
      setAlbumsLoading(false);
    }
    fetchAlbums();
  }, []);

  const addToAlbum = async (image: string, selectedAlbum: string) => {
    if (selectedAlbum === "") {
      setError("Please select an album.");
      return;
    }
    setAdding(true);
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
    setAdding(false);
    setDialogOpen(false);
  };
  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        <Button
          variant="ghost"
          className="hover:bg-slate-100 hover:text-black space-x-1 items-center"
        >
          <ImagePlus width={20} height={20} />
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
              <SelectContent className="py-1">
                {albumsLoading ? (
                  <div className="hover:bg-transparent flex justify-center">
                    <LoadingAnimation
                      width={20}
                      height={20}
                      className="text-white"
                    />
                  </div>
                ) : (
                  albums.map((album: Folder) => (
                    <SelectItem key={album.path} value={album.name}>
                      {album.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>
            {error && <p className="text-red-500 px-12">{error}</p>}
        </div>
        <DialogFooter>
            <Button
              onClick={() => {
                addToAlbum(image, selectedAlbum);
              }}
            >
              {adding ? (
                <LoadingAnimation width={20} height={20} />
              ) : (
                "Add To Album"
              )}
            </Button>
        </DialogFooter>
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setDialogOpen(false);
            setError("")
          }}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
