import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted skeleton-loader flex h-full w-full bg-[#e0e0e0] border-r-[8px] ", className)} {...props} />);
}

export { Skeleton }