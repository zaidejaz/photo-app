"use client"
import React from 'react'
import { Button } from './ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { UploadIcon } from '@radix-ui/react-icons';

const UploadBtn = () => {
    const router = useRouter();
    const handleupload = () => {
        setTimeout(() => {
            router.refresh()
        },(500))
    }
    return (
        <Button asChild className='cursor-pointer'>
            <CldUploadButton uploadPreset="jhkwtl62" onUpload={handleupload} className='gap-2'>
                <UploadIcon/>
                Upload
            </CldUploadButton>
        </Button>
    )
}

export default UploadBtn