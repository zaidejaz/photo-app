import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";

export function AddToAlbumDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className="hover:bg-gray-100 hover:text-black gap-3 items-center">
          <PlusIcon />
          Add To Album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-black">
        <DialogHeader>
          <DialogTitle>Add To Album</DialogTitle>
          <DialogDescription>Add This Image To An Album</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Album" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="outdoor">Outdoors</SelectItem>
                <SelectItem value="night">Night</SelectItem>
                <SelectItem value="snowfall">Snowfall</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add To Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
