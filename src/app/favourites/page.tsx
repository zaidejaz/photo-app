import React from "react";
import CloudinaryImage from "@/components/cloudinary-image";
import cloudinary from "cloudinary";
import { searchResult } from "@/app/gallery/page";
import FavouritesList from "./favourites-list";
import ForceRefresh from "@/components/Force-Refresh";

const Favourites = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags:favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: searchResult[] };

  return (
    <>
      <ForceRefresh />
      <div className="mt-5">
        <div className="px-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Favourites
          </h1>
          <FavouritesList initialResources={results.resources} />
        </div>
      </div>
    </>
  );
};

export default Favourites;
