import { cn } from "@/lib/utils";

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center lg:items-center lg:justify-center md:mr-8 [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default DemoContainer