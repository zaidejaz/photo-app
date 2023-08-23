import React from "react";
import CloudinaryImage from "@/components/cloudinary-image";
import cloudinary from "cloudinary";
import MasonaryGrid from "@/components/masonary-grid";

export type searchResult = {
  public_id: string;
  tags: string[];
};

const Gallery = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .execute()) as { resources: searchResult[] };
  return (
    <div className="px-4 mt-5 min-w-[full] flex justify-center flex-col">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Gallery
      </h1>
      <MasonaryGrid
        images={results.resources}
        getImage={(imageData: searchResult) => {
          return (
            <CloudinaryImage
              alt={imageData.public_id}
              imageData={imageData}
              path="/gallery"
            />
          );
        }}
      />
    </div>
  );
};

export default Gallery;
