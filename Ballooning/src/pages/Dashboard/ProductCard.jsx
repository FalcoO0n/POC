import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCard({ data = {} }) {
  return (
    <div
      className="w-1/4 rounded-lg shadow-sm border transition hover:cursor-pointer
 hover:border-slate-300 hover:scale-[1.05] hover:shadow-lg"
    >
      <Link to={data.to}>
        <Card>
          <CardHeader className="font-bold text-slate-700 p-2">
            {data.title}
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            facilis nulla culpa iure recusandae atque quae? Ullam aut a fuga?
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
