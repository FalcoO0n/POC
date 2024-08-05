import { ExpandIcon, RefreshCwIcon, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import InnerDialogue from "./InnerDialogue";
import { useEffect, useState } from "react";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Total",
    color: "#afc7db",
  },
  mobile: {
    label: "Accepted",
    color: "#afdbbe",
  },
};

export function ColumnChart() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!loader) {
      setTimeout(() => {
        setLoader(true);
      }, 5000);
    }
  }, [loader]);
  return (
    <Card className="w-full shadow-lg border">
      <CardHeader>
        <CardTitle className="font-semibold text-slate-600 flex justify-between items-center">
          <div>Inspection Analysis</div>
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
            {!loader && <span className="text-sm"> Refreshing... </span>}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <RefreshCwIcon
                    size={15}
                    onClick={(e) => setLoader(!loader)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Refresh Card</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InnerDialogue />
                </TooltipTrigger>
                <TooltipContent>
                  <p>View in full screen</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      {loader ? (
        <>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer barSize={40} data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Inspections accepted by 5.2% this month{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing analysis of accepted inspections
            </div>
          </CardFooter>
        </>
      ) : (
        <div className="p-6 pt-0 min-h-[33vh]">
          <div className="flex justify-between items-end gap-5">
            <div className="flex justify-end items-end gap-2 w-full ">
              <Skeleton className="h-[28vh] w-[35%]" />
              <Skeleton className="h-[20vh] w-[35%]" />
            </div>
            <div className="flex justify-end items-end gap-2 w-full">
              <Skeleton className="h-[33vh] w-[35%]" />
              <Skeleton className="h-[10vh] w-[35%]" />
            </div>
            <div className="flex justify-end items-end gap-2 w-full">
              <Skeleton className="h-[32vh] w-[35%]" />
              <Skeleton className="h-[29vh] w-[35%]" />
            </div>
            <div className="flex justify-end items-end gap-2 w-full">
              <Skeleton className="h-[26vh] w-[35%]" />
              <Skeleton className="h-[11vh] w-[35%]" />
            </div>
            <div className="flex justify-end items-end gap-2 w-full">
              <Skeleton className="h-[15vh] w-[35%]" />
              <Skeleton className="h-[5vh] w-[35%]" />
            </div>
          </div>
          <Skeleton className="w-full h-[10vh] mt-2" />
        </div>
      )}
    </Card>
  );
}
