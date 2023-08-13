"use client"
import { CldImage } from 'next-cloudinary';
import React from 'react'


const CloudinaryImage = ({ publicId }: { publicId: string }, props: any) => {
    return (
            <div>
                <CldImage
                    src={publicId}
                    width={400}
                    height={300}
                    alt='Description of my image'
                />
                <div className='relative top-2 right-2'>

                </div>
            </div>
    )
}

export default CloudinaryImage