import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HeaderCard() {
  return <Card>
        <CardHeader className="font-[600] text-slate-600 p-4">
          Welcome to the MappZen Dashboards
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="text-2xl font-bold">Hey there ! &#129321;</div>
            <span className="text-sm text-slate-500">
            Quick insights into our top product features and benefits.
            </span>
          </div>
        </CardContent>
      </Card>;
}
  