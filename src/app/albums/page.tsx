import React from "react";
import AlbumCard from "@/components/album-card";
import { Button } from "@/components/ui/button";
import CreateAlbum from "@/components/create-album-dialog";
import { getFolders } from "@/utils/actions";

export type Folder = {
  name: string;
  path: string;
};
const Albums = async () => {
  const folders = await getFolders();
  return (
    <>
      <div className="px-4 mt-5 min-w-[full] flex justify-center flex-col">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Albums
          </h1>
          <Button variant={"outline"} asChild>
            <CreateAlbum folders={folders} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
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
