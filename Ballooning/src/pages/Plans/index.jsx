import { Header } from "./Header";
import { DataTable } from "../../components/custom/DataTable";
import { plans } from "./mockData";

import { EyeIcon, MoreVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React from "react";
import BreadCrumb from "../Utility/BreadCrumb";

const Plans = () => {
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "zctppT_Template_Code",
      header: "Plan Type",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctppT_Template_Code")}</div>
      ),
    },
    {
      accessorKey: "gcmP_Part_Number",
      header: "Part Number - Rev",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("gcmP_Part_Number")}</div>
      ),
    },
    {
      accessorKey: "zctppT_Description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctppT_Description")}</div>
      ),
    },
    {
      accessorKey: "gcmU_Username",
      header: "Created By",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("gcmU_Username")}</div>
      ),
    },
    {
      accessorKey: "zctppT_ZCTPTP_Parameters_Count",
      header: "Number Of Specs",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctppT_ZCTPTP_Parameters_Count")}
        </div>
      ),
    },
    {
      accessorKey: "zctppT_Status",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          className={
            row.getValue("zctppT_Status")
              ? "bg-green-100 text-green-500 hover:bg-green-100"
              : "bg-red-100 text-red-500 hover:bg-red-100"
          }
        >
          {row.getValue("zctppT_Status") ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      header: "Actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='flex justify-center items-start gap-2 flex-col' >
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className='bg-yellow-100 w-full border border-yellow-500'>
                <Link to={"/plan_parameters/1"}>
                  <div className="flex justify-center items-center gap-2">
                    <EyeIcon className="size-5  cursor-pointer" />
                    View
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='bg-red-100 w-full border border-red-500'>
                <div className="flex justify-center items-center gap-2">
                  <TrashIcon className="size-5  cursor-pointer" />
                  Delete
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="p-3">
      <Card className="shadow-lg">
        <CardHeader className="p-2 mx-5 flex justify-between items-center flex-row border-b-2">
          <Header />
        </CardHeader>
        <CardContent>
          <DataTable data={plans} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Plans;
