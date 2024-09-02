import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CvUploader() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="cv" className="text-sm font-normal text-black-1">
        Add Your CV
      </Label>
      <Input id="cv" name="cv" type="file" />
    </div>
  );
}
