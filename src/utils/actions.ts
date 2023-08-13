"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
export async function setAsFavouriteAction(publicId:string, isFavourited:boolean){
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
    console.log("Added To Favourite")
    console.log({ isFavourited })
    revalidatePath("/gallery")
}

export async function removeAsFavouriteAction(publicId:string, isFavourited:boolean){
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
    console.log("Removed From Favourite");
    console.log({ isFavourited })
    revalidatePath("/gallery")
}