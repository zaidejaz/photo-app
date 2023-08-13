import React from 'react'
import CloudinaryImage from '@/components/cloudinary-image';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';

type searchResult = {
    public_id: string;
}

const Gallery = async () => {

    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(30)
        .execute() as {resources: searchResult[]};

    return (
        <div className='px-4'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Gallery
            </h1>
            <div className='grid grid-cols-4 my-4'>
                {
                    results.resources.map((result) => (
                       <CloudinaryImage 
                       publicId={result.public_id}
                       />
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery