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
import { create } from "domain";
import { createFolder } from "@/utils/actions";

const CreateAlbum = ({ folders }: { folders: Folder[] }) => {
  const albums = folders;
  const [dialogstate, setDialogState] = useState<boolean>(false);
  const [albumName, setAlbumName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const createAlbum = () => {
    if (albumName.trim() === "") {
      setError("Album name cannot be empty.");
      return;
    }

    if (albums.some((album) => album.name === albumName)) {
      setError("Album already exists.");
      return;
    }

    createFolder(albumName);
    setDialogState(false);
    setError("");
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
      <DialogContent className="sm:max-w-[425px]">
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
              setError(""); // Clear error message when input changes
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
            Create Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAlbum;
