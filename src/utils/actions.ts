"use server";
import { Folder } from "@/app/albums/page";
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

export async function getFolders() {
  const folders = await cloudinary.v2.api.root_folders();
  return folders.folders;
}

export async function addImageToAlbum(image: string, album: string) {
  const folderName = image.split("/")[0];
  const folders = await getFolders();
  const folderNames = folders.map((folder: Folder) => folder.name);
  let public_id = "";
  if (folderNames.includes(`${folderName}`)) {
    public_id = image.split("/")[1];
  } else {
    public_id = image;
  }
  try {
    await cloudinary.v2.uploader.rename(image, `${album}/${public_id}`);
    return { success: true, statusCode: 200 };
  } catch (error: any) {
    return { success: false, statusCode: 500, errorMessage: error.message };
  }
}
