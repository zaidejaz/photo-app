import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => (
  <div className="px-4 mt-5">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Edit Image
    </h1>
    <div className="flex flex-wrap gap-2 my-5">
      <Skeleton className="w-[100px] h-[40px]" />
      <Skeleton className="w-[100px] h-[40px]" />
      <Skeleton className="w-[100px] h-[40px]" />
      <Skeleton className="w-[100px] h-[40px]" />
      <Skeleton className="w-[100px] h-[40px]" />
      <Skeleton className="w-[100px] h-[40px]" />
    </div>
    <div className="md:flex items-center space-x-0 space-y-2 md:space-y-0 md:space-x-3">
      <Skeleton className="w-[40px] h-[40px]" />
      <Skeleton className="md:w-[40vw] h-[40px]" />
      <Skeleton className="w-[130px] h-[40px]" />
    </div>
    <div className="min-w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 m-4">
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Original Image
          </h3>
          <Skeleton className="w-[600px] h-[400px]" />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
