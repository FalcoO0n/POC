import { DataTable } from "../../components/custom/DataTable";
import { parameters } from "./mockData";

import { EyeIcon, MoreVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Header } from "./Header";

const PlanParameters = () => {

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
      accessorKey: "zctptP_Balloon_No",
      header: "Balloon No.",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("zctptP_Balloon_No")}</div>
      ),
    },
    {
      accessorKey: "gcmO_Name",
      header: "Operation",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("gcmO_Name")}</div>
      ),
    },
    {
      accessorKey: "zctptP_Specification",
      header: "Specification",
      cell: ({ row }) => (
        <div className="">{row.getValue("zctptP_Specification")}</div>
      ),
    },
    {
      accessorKey: "zctptP_Places",
      header: "Places",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctptP_Places")}
        </div>
      ),
    },
    {
      accessorKey: "zccS_Name",
      header: "Sampling",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zccS_Name")}
        </div>
      ),
    },
    {
      accessorKey: "zctptP_Instrument_Type_desc",
      header: "Inspection Method",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctptP_Instrument_Type_desc")}
        </div>
      ),
    },
    {
      accessorKey: "zctptP_Parameter_Class",
      header: "Parameter Class",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("zctptP_Parameter_Class")}
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
              <DropdownMenuItem className='bg-green-100 w-full border border-green-500'>
                <Link to={'/plan_parameters/1'}>
                <div className="flex justify-center items-center gap-2">
                  <EyeIcon className="size-5  cursor-pointer" />
                  View
                </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='bg-yellow-100 w-full border border-yellow-500'>
                <div className="flex justify-center items-center gap-2">
                  <PencilIcon className="size-5  cursor-pointer" />
                  Edit
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
      <Card className='shadow-lg'>
      <CardHeader className="p-2 mx-5 flex justify-between items-center flex-row border-b-2">
          <Header     />
        </CardHeader>
        <CardContent>
          <DataTable data={parameters.zctppT_Part_Parameters} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanParameters;
