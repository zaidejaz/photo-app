"use server";
import cloudinary from "cloudinary";

export async function setAsFavouriteAction(
  publicId: string,
  isFavourited: boolean
) {
  if (isFavourited) {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  }
}

export async function createFolder(folderName: string) {
  await cloudinary.v2.api.create_folder(folderName);
}

export async function getFolder(){
  const folders = await cloudinary.v2.api.root_folders();
  return folders.folders;
}
