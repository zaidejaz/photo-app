"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ForceRefresh = () => {
  const router = useRouter();
  router.refresh();
  return <></>;
};
export default ForceRefresh;
