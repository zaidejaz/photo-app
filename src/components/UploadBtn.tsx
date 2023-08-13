"use client"
import React from 'react'
import { Button } from './ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const UploadBtn = () => {
    const router = useRouter();
    const handleupload = () => {
        setTimeout(() => {
            router.refresh()
        },(1000))
    }
    return (
        <Button asChild className='cursor-pointer'>
            <CldUploadButton uploadPreset="jhkwtl62" onUpload={handleupload}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 w-4 h-4">
                    <path
                        fill-rule="evenodd"
                        d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd" />
                </svg>
                Upload
            </CldUploadButton>
        </Button>
    )
}

export default UploadBtn