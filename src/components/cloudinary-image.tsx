"use client";
import React, { useState, useTransition } from "react";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavouriteAction } from "@/utils/actions";
import { searchResult } from "@/app/gallery/page";
import { HeartIcon } from "@radix-ui/react-icons";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { ImageMenu } from "./image-menu";

const CloudinaryImage = (
  props: {
    imageData: searchResult;
    onUnheart?: (unheartedResource: searchResult) => void;
  } & Omit<CldImageProps, "src">
) => {
  const { imageData, onUnheart } = props;
  const [isFavourited, setIsFavourited] = useState(
    imageData.tags.includes("favourite")
  );

  const [transition, startTransition] = useTransition();

  return (
    <div className="relative">
      <CldImage
        src={imageData.public_id}
        width={400}
        height={300}
        alt="Description of my image"
      />
      {isFavourited ? (
        <HeartFilledIcon
          className="w-6 h-6 text-red-500 absolute top-2 left-2 cursor-pointer"
          onClick={() => {
            setIsFavourited(false);
            startTransition(() => {
              setAsFavouriteAction(imageData.public_id, true);
            });
            onUnheart?.(imageData);
          }}
        />
      ) : (
        <HeartIcon
          className="w-6 h-6 text-white hover:text-red-500 absolute top-2 left-2 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imageData.public_id, false);
            });
            setIsFavourited(true);
          }}
        />
      )}
      <div className="absolute top-2 right-2">
      <ImageMenu/>
      </div>
    </div>
  );
};

export default CloudinaryImage;
