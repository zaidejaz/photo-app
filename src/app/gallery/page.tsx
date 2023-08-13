import React from 'react'
import CloudinaryImage from '@/components/cloudinary-image';
import cloudinary from 'cloudinary'

export type searchResult = {
    public_id: string;
    tags: string[];
}

const Gallery = async () => {

    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(1)
        .execute() as {resources: searchResult[]};

    return (
        <div className='px-4'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Gallery
            </h1>
            <div className='grid grid-cols-4 my-4 gap-4'>
                {
                    results.resources.map((result) => (
                       <CloudinaryImage 
                       imageData={result}
                       />
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery