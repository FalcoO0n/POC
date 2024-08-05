import React, {useState} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Squares2X2Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";


function DotMenu() {
    const [isOpen, setIsOpen] = useState(false); // Add state for controlling popover visibility

  const items = [
    { name: "MappZen", href: "/ballooning", icon: <Squares2X2Icon className="mr-2" /> },
    { name: "MappEye", href: "/mappEye", icon: <MagnifyingGlassIcon className="mr-2" /> },
    { name: "MappTrail", href: "", icon: <Squares2X2Icon className="mr-2" /> },
    { name: "MappAdapt", href: "", icon: <MagnifyingGlassIcon className="mr-2" /> },
    { name: "MappVita", href: "", icon: <Squares2X2Icon className="mr-2" /> },
    { name: "MappSprint", href: "", icon: <MagnifyingGlassIcon className="mr-2" /> },
    { name: "Seven", href: "", icon: <Squares2X2Icon className="mr-2" /> },
    { name: "Eight", href: "", icon: <MagnifyingGlassIcon className="mr-2" /> },
    { name: "Nine", href: "", icon: <Squares2X2Icon className="mr-2" /> },
    { name: "Ten", href: "", icon: <MagnifyingGlassIcon className="mr-2" /> },
  ];
  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Squares2X2Icon className="text-white cursor-pointer size-6 hover:text-gray-300" />
        </PopoverTrigger>
        <PopoverContent className="shadow-lg  w-[420px]">
          <div className="flex flex-col">
            {SearchBar()}
            <div className="flex flex-row flex-wrap gap-6 pt-3 pb-5 pl-3">
              {items.map((item, index) => (
                <Link to={item.href} className="flex flex-col items-center" key={index} onClick={() => setIsOpen(false)}>
                  <Skeleton className="w-16 h-16 rounded-md bg-slate-300" />
                  <div className="mt-1 text-xs font-medium text-center">{item.name}</div>
                </Link>
              ))}
            </div>
            <Separator />

            <div className="flex flex-row gap-6 px-3 pt-3">
              <div>
                <Skeleton className="w-16 h-16 rounded-md bg-slate-300" />

                {/* <div className="w-16 h-16 bg-gray-200 rounded-md"></div> */}
                <div className="mt-1 text-xs font-medium text-center">Quick Link 1</div>
              </div>
              <div>
                <Skeleton className="w-16 h-16 rounded-md bg-slate-300" />
                {/* <div className="w-16 h-16 bg-gray-200 rounded-md"></div> */}
                <div className="mt-1 text-xs font-medium text-center">Quick Link 2</div>
              </div>
              <div>
                <Skeleton className="w-16 h-16 rounded-md bg-slate-300" />
                {/* <div className="w-16 h-16 bg-gray-200 rounded-md"></div> */}
                <div className="mt-1 text-xs font-medium text-center">Quick Link 3</div>
              </div>
              <div>
                <Skeleton className="w-16 h-16 rounded-md bg-slate-300" />
                {/* <div className="w-16 h-16 bg-gray-200 rounded-md"></div> */}
                <div className="mt-1 text-xs font-medium text-center">Quick Link 4</div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default DotMenu;

function SearchBar() {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-2 py-1 pr-8 mb-2 border border-gray-200 rounded-md"
      />
      <MagnifyingGlassIcon className="absolute top-0 px-2 py-1 text-gray-400 rounded-md size-8 right-1" />
    </div>
  );
}
