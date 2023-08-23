import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="px-4 mt-5 min-w-[full] flex justify-center flex-col">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Favourites
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
        <Skeleton className="w-[90vw] md:w-[45vw] lg:w-[20vw] h-[40vh] md:[35vh]" />
      </div>
    </div>
  );
};

export default Loading;
