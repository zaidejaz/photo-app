import React from "react";
import AlbumCard from "@/components/album-card";
import { Button } from "@/components/ui/button";
import CreateAlbum from "@/components/create-album-dialog";
import { getFolder } from "@/utils/actions";
import ForceRefresh from "@/components/force-refresh";

export type Folder = {
  name: string;
  path: string;
};
const Albums = async () => {
  const folders = await getFolder();
  return (
    <>
      <ForceRefresh />
      <div className="px-4 w-full">
        <div className="flex justify-between">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Albums
          </h1>
          <Button variant={"outline"} asChild>
            <CreateAlbum folders={folders} />
          </Button>
        </div>
        <div className="flex my-4 gap-4">
          {folders.map((folder: Folder) => (
            <AlbumCard
              key={folder.path}
              folderName={folder.name}
              folderPath={folder.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Albums;
