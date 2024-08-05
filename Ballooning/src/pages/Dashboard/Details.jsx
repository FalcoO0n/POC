import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const Details = ({data={}}) => {


  return (
    <div
      className="w-[24.3%] rounded-lg shadow-sm border transition hover:cursor-pointer 
 hover:border-slate-300 hover:scale-[1.05] hover:shadow-lg"
    >
     <Link to={data.to}>
            <Card>
              <CardHeader className="font-[600] text-slate-600 p-4">
                {data.title}
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center gap-1 flex-col pt-5">
                  <span className="text-5xl font-bold">{data.value}</span>
                  <span className="text-md text-slate-400">{data.footer}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
    </div>
  );
};

export default Details;
