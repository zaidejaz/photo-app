"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const Edit = ({
  searchParams: { image },
}: {
  searchParams: { image: string };
}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const [edit, setEdit] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [pendingPrompt, setPendingPrompt] = useState<string>("");
  return (
    <div className="px-4 mt-5 min-w-[full] flex justify-center flex-col">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Edit Image
      </h1>
      <div className="flex flex-wrap gap-2 my-5">
        <Button
          variant={"outline"}
          onClick={() => {
            setEdit("");
          }}
        >
          Clear All
        </Button>
        <Button
          onClick={() => {
            setEdit("tint");
          }}
        >
          Tint
        </Button>
        <Button
          onClick={() => {
            setEdit("removebg");
          }}
        >
          Remove Background
        </Button>
        <Button
          onClick={() => {
            setEdit("pixelate");
          }}
        >
          Pixelate
        </Button>
        <Button
          onClick={() => {
            setEdit("grayscale");
          }}
        >
          Grayscale
        </Button>
        <Button
          onClick={() => {
            setEdit("blur");
          }}
        >
          Blur
        </Button>
      </div>
      <div className="md:flex items-center space-x-0 space-y-2 md:space-y-0 md:space-x-3">
        <Label htmlFor={"prompt"} className="text-xl">
          Prompt
        </Label>
        <Input
          id="prompt"
          className="md:w-[40vw]"
          onChange={(e) => {
            setPendingPrompt(e.currentTarget.value);
          }}
        />
        <Button
          onClick={() => {
            setEdit("generativefill");
            setPrompt(pendingPrompt);
          }}
        >
          Apply Generative Fill
        </Button>
      </div>
      <div className="min-w-full">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 m-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Original Image
            </h3>
            <CldImage alt={image} src={image} width={600} height={400} />
          </div>
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Edited Image
            </h3>
            {edit === "tint" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_tint:80:blue:blueviolet/${image}`}
                alt={"Tinted Image"}
                width={600}
                height={400}
              />
            )}
            {edit === "removebg" && (
              <CldImage
                alt={"Removed Background Image"}
                src={image}
                width={600}
                height={400}
                removeBackground
              />
            )}
            {edit === "pixelate" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_pixelate:20/${image}`}
                alt={"Pixelated Image"}
                width={600}
                height={400}
              />
            )}
            {edit === "grayscale" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_grayscale/${image}`}
                alt={"Grayscaled Image"}
                width={600}
                height={400}
              />
            )}
            {edit === "blur" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_blur:800/${image}`}
                alt={"Blured Image"}
                width={600}
                height={400}
              />
            )}
            {edit === "generativefill" && (
              <CldImage
                alt={"Generative Fill Image"}
                src={image}
                width={800}
                height={400}
                fillBackground={{ prompt }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
