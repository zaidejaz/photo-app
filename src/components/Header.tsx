"use client"
import { CldUploadButton } from 'next-cloudinary'
import React from 'react'
import { ModeToggle } from './toggle-theme'
import { Button } from './ui/button'

const Header = () => {
    return (
        <>
            <nav className='flex justify-between p-4'>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Photo App
                </h2>
                <div className='flex space-x-4'>
                    <Button asChild>
                        <CldUploadButton uploadPreset="jhkwtl62" />
                    </Button>
                    <ModeToggle />
                </div>
            </nav>
        </>
    )
}

export default Header