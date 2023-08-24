import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import DeleteAlbum from "./delete-dialog";
const AlbumCard = ({
  folderName,
  folderPath,
}: {
  folderName: string;
  folderPath: string;
}) => {
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>{folderName}</CardTitle>
        <CardDescription>{`All of your ${folderName} Album Images`}</CardDescription>
        <DeleteAlbum album={folderName} deleteType="album"/>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`albums/${folderPath}`}>See More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;
