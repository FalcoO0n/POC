import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row w-full gap-2">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="text" placeholder="Text" />
      </div>
      <div className="flex flex-row w-full gap-2">
        <Input type="number" placeholder="Number" />
        <Input type="tel" placeholder="Phone Number" />
        <Input type="url" placeholder="URL" />
      </div>
      <div className="flex flex-row w-full gap-2">
        <Input type="date" placeholder="Date" />
        <Input type="time" placeholder="Time" />
        <Input type="color" placeholder="Color" />
      </div>
      <div>
        <Input className="w-fit" type="file" placeholder="File" />
      </div>
    </div>
  );
}
