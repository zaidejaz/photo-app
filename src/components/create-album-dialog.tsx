"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Folder } from "@/app/albums/page";
import { createFolder } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { Cross2Icon } from "@radix-ui/react-icons";
import LoadingAnimation from "./loading-animation";
import { toast } from "./ui/use-toast";

const CreateAlbum = ({ folders }: { folders: Folder[] }) => {
  const albums = folders;
  const router = useRouter();
  const [dialogstate, setDialogState] = useState<boolean>(false);
  const [albumName, setAlbumName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const createAlbum = async () => {
    setLoading(true);
    if (albumName.trim() === "") {
      setError("Album name cannot be empty.");
      return;
    }

    const trimmedAlbumName = albumName.trim();
    if (albums.some((album) => album.name === trimmedAlbumName)) {
      setError("Album already exists.");
      return;
    }

    const result = await createFolder(trimmedAlbumName);
    if (result.statusCode === 200) {
      toast({
        variant: "success",
        title: "Success!!",
        description: "Album Created Successfuly.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Something Bad Happened!!",
        description: "There was an error Creating Album.",
      });
    }
    router.refresh();
    setDialogState(false);
    setError("");
    setLoading(false);
  };

  return (
    <Dialog
      open={dialogstate}
      onOpenChange={() => {
        setAlbumName("");
        setError("");
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            setDialogState(true);
          }}
        >
          Create New Album
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={() => {
          setDialogState(false);
        }}
      >
        <DialogHeader>
          <DialogTitle>Create New Album</DialogTitle>
          <DialogDescription>
            Create a New Album to add your desired Image to it.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-1">
          <Label htmlFor="name" className="w-full">
            Album Name
          </Label>
          <Input
            id="Album Name"
            placeholder="My Album"
            className="col-span-2"
            onChange={(e) => {
              setAlbumName(e.currentTarget.value);
              setError("");
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              createAlbum();
            }}
          >
            {loading ? <LoadingAnimation width={20} height={20}/> : "Create Album"}
          </Button>
        </DialogFooter>
        <div
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={() => {
            setDialogState(false);
          }}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAlbum;
