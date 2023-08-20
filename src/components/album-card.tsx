import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AlbumCard = ({
  folderName,
  folderPath,
}: {
  folderName: string;
  folderPath: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folderName.toUpperCase()}</CardTitle>
        <CardDescription>{`All of your ${folderName} Album Images`}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={`albums/${folderPath}`}>See More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;
