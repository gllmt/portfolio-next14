import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 hover:bg-accent/50 border border-accent rounded-sm text-primary font-mono px-1 py-0.5",className)} {...props} />
  )
}