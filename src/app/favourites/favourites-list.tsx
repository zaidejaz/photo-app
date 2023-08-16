"use client";
import React, { useEffect, useState } from "react";
import CloudinaryImage from "@/components/cloudinary-image";
import { searchResult } from "../gallery/page";

const FavouritesList = ({initialResources}: { initialResources: searchResult[] }) => {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources])
  return (
    <div className="grid grid-cols-4 my-4 gap-4">
      {resources.map((result) => (
        <CloudinaryImage
          imageData={result}
          alt="Favourite Image"
          onUnheart={(unheartedResource) => 
            setResources((currentResource) =>
              currentResource.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            )
          }
        />
      ))}
    </div>
  );
};

export default FavouritesList;
