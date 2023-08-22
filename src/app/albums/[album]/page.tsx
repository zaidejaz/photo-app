import { searchResult } from '@/app/gallery/page';
import cloudinary from "cloudinary";
import MasonaryGrid from '@/components/masonary-grid';
import React from 'react'
import CloudinaryImage from '@/components/cloudinary-image';

const Album = async ({params}:{params:{album:string}}) => {

        const results = (await cloudinary.v2.search
          .expression("resource_type:image AND folder="+params.album)
          .sort_by("created_at", "desc")
          .with_field("tags")
          .execute()) as { resources: searchResult[] };
  return (
    <div>
        <MasonaryGrid
        images={results.resources}
        getImage={(imageData: searchResult) => {
          return <CloudinaryImage alt="My Image" imageData={imageData} path="/album"/>;
        }}
      />
    </div>
  )
}

export default Album