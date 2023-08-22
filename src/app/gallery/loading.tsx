import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="px-4 mt-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
        <Skeleton className="w-[350px] lg:w-[280px] h-[300px]" />
      </div>
    </div>
  );
};

export default Loading;
