import { Header } from "./Header";
import { DataTable } from "../../components/custom/DataTable";
import { inspections } from "./mockData";

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
import { TrashIcon } from "@heroicons/react/24/outline";
import BreadCrumb from "../Utility/BreadCrumb";

const Inspections = () => {
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
      accessorKey: "zctiP_ID",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctiP_ID")}</div>
      ),
    },
    {
      accessorKey: "zctiP_ZCTPPT_Template_Code",
      header: "Type",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctiP_ZCTPPT_Template_Code")}</div>
      ),
    },
    {
      accessorKey: "zctiP_Batch_Number",
      header: "Batch No.",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctiP_Batch_Number")}</div>
      ),
    },
    {
      accessorKey: "zctppT_Label",
      header: "Part No. [ Rev ]",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctppT_Label")}</div>
      ),
    },
    {
      accessorKey: "zctiP_Insp_Type_Desc",
      header: "Insp. Type / Opr.",
      cell: ({ row }) => (
        <div className="capitalize">
          {
            row.original.zctiP_Insp_Type_Opr_Flag == 1 ? 
            `Insp - ${row.getValue("zctiP_Insp_Type_Desc")}` :
            `Oper - ${row.original.zctiP_Operation_ID_Desc}`
          }
        </div>
      ),
    },
    {
      accessorKey: "zctiP_Lot_Size",
      header: "Lot Size",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctiP_Lot_Size")}
        </div>
      ),
    },
    {
      accessorKey: "zctiP_Filled_Values_Per",
      header: "Filled %",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctiP_Filled_Values_Per")} {"%"}
        </div>
      ),
    },
    {
      accessorKey: "zctiP_Filled_Values_Ok_Per",
      header: "OK %",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctiP_Filled_Values_Ok_Per")} {"%"}
        </div>
      ),
    },
    {
      accessorKey: "zctiP_Created_By_Desc",
      header: "Created By",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctiP_Created_By_Desc")}
        </div>
      ),
    },
    {
      accessorKey: "zctiP_Status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctiP_Status")}
        </div>
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
                  <div className="flex justify-center items-center gap-2">
                    <EyeIcon className="size-5  cursor-pointer" />
                    View
                  </div>
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
          <DataTable data={inspections} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Inspections;
