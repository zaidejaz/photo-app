import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="px-4 mt-5 min-w-[full] flex justify-center flex-col">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Albums
        </h1>
        <Skeleton className="w-[150px] h-[40px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
        <Skeleton className="w-[300px] md:w-[300px] lg:w-[240px] h-[150px]" />
      </div>
    </div>
  );
};

export default Loading;
