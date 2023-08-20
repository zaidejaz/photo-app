"use client";
import React, { useEffect, useState } from "react";
import CloudinaryImage from "@/components/cloudinary-image";
import { searchResult } from "../gallery/page";
import MasonaryGrid from "@/components/masonary-grid";

const FavouritesList = ({
  initialResources,
}: {
  initialResources: searchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);
  
  return (
    <MasonaryGrid
      images={resources}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            imageData={imageData}
            alt="Favourite Image"
            onUnheart={(unheartedResource) =>
              setResources((currentResource) =>
                currentResource.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              )
            }
          />
        );
      }}
    />
  );
};

export default FavouritesList;
