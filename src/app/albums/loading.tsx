import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="px-4 mt-5">
      <div className="flex justify-between items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Albums
          </h1>
          <Skeleton className="w-[150px] h-[40px]"/>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
        <Skeleton className="w-[340px] md:w-[350px] lg:w-[290px] h-[150px]" />
      </div>
    </div>
  );
};

export default Loading;
