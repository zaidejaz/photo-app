"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteFolder, deleteImage } from "@/utils/actions";
import { toast } from "./ui/use-toast";
import LoadingAnimation from "./loading-animation";
import { useRouter } from "next/navigation";

const DeleteDialog = ({
  album,
  image,
  deleteType,
}: {
  album?: string;
  image?: string;
  deleteType: string;
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isAlbum, setIsAlbum] = useState(false);

  useEffect(() => {
    setIsAlbum(deleteType === "album" ? true : false);
  }, [deleteType]);

  let result: any;
  const router = useRouter();
  const deleteSomething = async () => {
    setDeleting(true);
    if (isAlbum) {
      result = await deleteFolder(album);
    } else {
      result = await deleteImage(image);
    }
    router.refresh();
    if (result.statusCode === 200) {
      toast({
        variant: "success",
        title: "Success!!",
        description: `${album ? "Album" : "Image"} "Deleted Successfuly".`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Something Bad Happened!!",
        description: `There was an error deleting ${
          album ? "Album" : "Image"
        }.`,
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDialogOpen(false);
    setDeleting(false);
  };
  return (
    <>
      <Dialog open={dialogOpen}>
        <DialogTrigger
          asChild
          className="w-[full]"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          {isAlbum ? (
            <div className=" absolute top-1 right-2 p-1 cursor-pointer">
              <Trash2 width={20} height={20} />
            </div>
          ) : (
            <Button variant="ghost" className="hover:bg-slate-100 hover:text-black space-x-1 items-center pr-5">
              <Trash2 width={20} height={20} />
              <span>Delete Image</span>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the {isAlbum?" Album":" Image"}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant={"outline"}
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              Close
            </Button>
            <Button variant={"destructive"} onClick={deleteSomething}>
              {deleting ? (
                <LoadingAnimation width={20} height={20} />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DeleteDialog;
