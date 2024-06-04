import { cn } from "@/utils";
import React from "react";

export default function Skeleton({ children, className }: { children: React.ReactNode; className?: React.HTMLProps<HTMLElement>["className"] }) {
  return <div className={cn("shine w-full h-full", className)}>{children}</div>;
}
