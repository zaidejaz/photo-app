"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Edit = ({
  searchParams: { image },
}: {
  searchParams: { image: string };
}) => {
  const [edit, setEdit] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [pendingPrompt, setPendingPrompt] = useState<string>("");
  return (
    <div className="px-4">
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
      <div className="flex items-center space-x-4">
        <Label htmlFor={"prompt"} className="text-xl">
          Prompt
        </Label>
        <Input
          id="prompt"
          className="w-[30vw]"
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
              <CldImage
                alt={image}
                src={image}
                width={600}
                height={400}
                tint="equalize:80:blue:blueviolet"
              />
            )}
            {edit === "removebg" && (
              <CldImage
                alt={image}
                src={image}
                width={600}
                height={400}
                removeBackground
              />
            )}
            {edit === "pixelate" && (
              <CldImage
                alt={image}
                src={image}
                width={600}
                height={400}
                pixelate="10"
              />
            )}
            {edit === "grayscale" && (
              <CldImage
                alt={image}
                src={image}
                width={600}
                height={400}
                grayscale
              />
            )}
            {edit === "blur" && (
              <CldImage
                alt={image}
                src={image}
                width={600}
                height={400}
                blur="1200"
              />
            )}
            {edit === "generativefill" && (
              <CldImage
                alt={image}
                src={image}
                width={800}
                height={400}
                fillBackground={{prompt}}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
