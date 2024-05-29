import React from "react";

export default function Skeleton({ children }: { children: React.ReactNode }) {
  return <div className="shine w-full h-full">{children}</div>;
}
