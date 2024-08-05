import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import {
  ArrowDownTrayIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { NewspaperIcon } from "lucide-react";

export function Header() {
  return (
    <React.Fragment>
      <div className="text-lg font-bold text-slate-700 capitalize flex justify-start items-center gap-2">
        <NewspaperIcon/>
        Inspection Plans
      </div>
      <div className="flex justify-center items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size='sm' className="  bg-blue-100 text-blue-500  rounded-sm hover:bg-blue-300 px-4 py-0">
                <PlusIcon className="size-4  cursor-pointer mr-1" />
                Add
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create Plan</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size='sm' className=" text-sm bg-orange-100 text-orange-500  rounded-sm hover:bg-orange-300 px-4 py-0">
                <ArrowDownTrayIcon className="size-4  cursor-pointer mr-1" />
                Export
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download Plans</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='sm' className="  text-slate-500 bg-slate-100 rounded-sm hover:bg-slate-300 px-4 py-0">
              <FunnelIcon className="size-4  cursor-pointer mr-1" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="shadow-lg pb-0">
            <Card className="w-full py-2 border-none">
              <CardHeader className="p-0 pb-3 px-4 text-sm mb-3 font-bold border-b-2">
                Apply Filters
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-end gap-4">
                  <div className="flex justify-start items-center gap-2">
                    <Label htmlFor="terms">Group By</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="apple">Plan Type</SelectItem>
                          <SelectItem value="banana">Part Number</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Label htmlFor="terms">Sort By</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a order" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="apple">Ascending</SelectItem>
                          <SelectItem value="banana">Descending</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="mt-3 flex justify-end items-center">
                        <Button size="sm" className="text-xs px-3">
                          Clear
                        </Button>
                      </div> */}
                </div>
              </CardContent>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </React.Fragment>
  );
}
