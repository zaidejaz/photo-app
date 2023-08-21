import { searchResult } from "@/app/gallery/page";
import React, { ReactNode } from "react";
import CloudinaryImage from "./cloudinary-image";

const MasonaryGrid = (props: {
  images: searchResult[];
  getImage: (imageData:searchResult) => ReactNode;
}) => {
  const Max_Columns = 4;
  const getcols = (colIndex: number) => {
    return props.images.filter(
      (image, index) => index % Max_Columns === colIndex
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        {[getcols(0), getcols(1), getcols(2), getcols(3)].map(
          (column, index) => (
            <div className={"flex flex-col gap-4"} key={index}>
              {column.map(props.getImage)}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default MasonaryGrid;
